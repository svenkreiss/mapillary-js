import * as THREE from "three";
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

import {
    combineLatest as observableCombineLatest,
    merge as observableMerge,
    Observable,
    Subject,
    Subscription,
} from "rxjs";

import {
    distinctUntilChanged,
    filter,
    first,
    map,
    mergeMap,
    publishReplay,
    refCount,
    scan,
    share,
    skip,
    startWith,
} from "rxjs/operators";

import { RenderPass } from "./RenderPass";
import { RenderCamera } from "./RenderCamera";
import { RenderService } from "./RenderService";
import { GLFrameRenderer } from "./interfaces/GLFrameRenderer";
import { GLRenderFunction } from "./interfaces/GLRenderFunction";
import { GLRenderHash } from "./interfaces/IGLRenderHash";
import { ViewportSize } from "./interfaces/ViewportSize";

import { SubscriptionHolder } from "../util/SubscriptionHolder";

interface GLRendererStatus {
    needsRender: boolean;
    renderer: THREE.WebGLRenderer;
}

interface GLRenderCamera {
    frameId: number;
    needsRender: boolean;
    perspective: THREE.PerspectiveCamera;
}

interface GLRenderHashes {
    [name: string]: GLFrameRenderer;
}

interface ForceRenderer {
    needsRender: boolean;
}

interface GLRendererOperation {
    (renderer: GLRendererStatus): GLRendererStatus;
}

interface GLRenderCameraOperation {
    (camera: GLRenderCamera): GLRenderCamera;
}

interface GLRenderHashesOperation extends Function {
    (hashes: GLRenderHashes): GLRenderHashes;
}

interface ForceRendererOperation {
    (forcer: ForceRenderer): ForceRenderer;
}

interface GLRendererCombination {
    camera: GLRenderCamera;
    eraser: ForceRenderer;
    trigger: ForceRenderer;
    renderer: GLRendererStatus;
    renders: GLFrameRenderer[];
}


// For WebXr experiment, the camera is taken over by the renderer.
// This function patches the THREE.WebGLRenderer function to
// preserve MJS's camera and use the new xrCamera instead for the
// render.
export const xrCamera = new THREE.PerspectiveCamera();
function patchWebGLRenderer(r: THREE.WebGLRenderer) {
    const _render = r.render.bind(r);
    r.render = function(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
        xrCamera.copy(camera, true);
        _render(scene, xrCamera);
    };
}


export class GLRenderer {
    private _renderService: RenderService;

    private _renderFrame$: Subject<RenderCamera> =
        new Subject<RenderCamera>();

    private _renderCameraOperation$: Subject<GLRenderCameraOperation> =
        new Subject<GLRenderCameraOperation>();
    private _renderCamera$: Observable<GLRenderCamera>;

    private _render$: Subject<GLRenderHash> = new Subject<GLRenderHash>();
    private _clear$: Subject<string> = new Subject<string>();
    private _renderOperation$: Subject<GLRenderHashesOperation> =
        new Subject<GLRenderHashesOperation>();
    private _renderCollection$: Observable<GLRenderHashes>;

    private _rendererOperation$: Subject<GLRendererOperation> =
        new Subject<GLRendererOperation>();
    private _renderer$: Observable<GLRendererStatus>;

    private _eraserOperation$: Subject<ForceRendererOperation> = new Subject<ForceRendererOperation>();
    private _eraser$: Observable<ForceRenderer>;

    private _triggerOperation$: Subject<ForceRendererOperation> = new Subject<ForceRendererOperation>();

    private _webGLRenderer$: Observable<THREE.WebGLRenderer>;

    private _renderFrameSubscription: Subscription;
    private _subscriptions: SubscriptionHolder = new SubscriptionHolder();

    private _opaqueRender$: Subject<void> = new Subject<void>();

    private co: GLRendererCombination = null;
    private xrWasPresenting = false;
    public rootScene = new THREE.Scene();

    constructor(
        canvas: HTMLCanvasElement,
        canvasContainer: HTMLElement,
        renderService: RenderService) {
        this._renderService = renderService;
        const subs = this._subscriptions;

        this._renderer$ = this._rendererOperation$.pipe(
            scan(
                (renderer: GLRendererStatus, operation: GLRendererOperation): GLRendererStatus => {
                    return operation(renderer);
                },
                { needsRender: false, renderer: null }),
            filter(
                (renderer: GLRendererStatus): boolean => {
                    return !!renderer.renderer;
                }));

        this._renderCollection$ = this._renderOperation$.pipe(
            scan(
                (hashes: GLRenderHashes, operation: GLRenderHashesOperation): GLRenderHashes => {
                    return operation(hashes);
                },
                {}),
            share());

        this._renderCamera$ = this._renderCameraOperation$.pipe(
            scan(
                (rc: GLRenderCamera, operation: GLRenderCameraOperation): GLRenderCamera => {
                    return operation(rc);
                },
                { frameId: -1, needsRender: false, perspective: null }));

        this._eraser$ = this._eraserOperation$.pipe(
            startWith(
                (eraser: ForceRenderer): ForceRenderer => {
                    return eraser;
                }),
            scan(
                (eraser: ForceRenderer, operation: ForceRendererOperation): ForceRenderer => {
                    return operation(eraser);
                },
                { needsRender: false }));

        const trigger$ = this._triggerOperation$.pipe(
            startWith(
                (trigger: ForceRenderer): ForceRenderer => {
                    return trigger;
                }),
            scan(
                (trigger: ForceRenderer, operation: ForceRendererOperation): ForceRenderer => {
                    return operation(trigger);
                },
                { needsRender: false }));

        const clearColor = new THREE.Color(0x0F0F0F);
        const renderSubscription = observableCombineLatest(
            this._renderer$,
            this._renderCollection$,
            this._renderCamera$,
            this._eraser$,
            trigger$).pipe(
                map(
                    ([renderer, hashes, rc, eraser, trigger]:
                        [GLRendererStatus, GLRenderHashes, GLRenderCamera, ForceRenderer, ForceRenderer]): GLRendererCombination => {
                        const renders: GLFrameRenderer[] = Object.keys(hashes)
                            .map((key: string): GLFrameRenderer => {
                                return hashes[key];
                            });

                        return { camera: rc, eraser: eraser, trigger: trigger, renderer: renderer, renders: renders };
                    }),
                filter(
                    (co: GLRendererCombination): boolean => {
                        let needsRender: boolean =
                            co.renderer.needsRender ||
                            co.camera.needsRender ||
                            co.eraser.needsRender ||
                            co.trigger.needsRender;

                        const frameId: number = co.camera.frameId;

                        for (const render of co.renders) {
                            if (render.frameId !== frameId) {
                                return false;
                            }

                            needsRender = needsRender || render.needsRender;
                        }

                        return needsRender;
                    }),
                distinctUntilChanged(
                    (n1: number, n2: number): boolean => {
                        return n1 === n2;
                    },
                    (co: GLRendererCombination): number => {
                        return co.eraser.needsRender ||
                            co.trigger.needsRender ? -co.camera.frameId : co.camera.frameId;
                    }))
            .subscribe((co: GLRendererCombination): void => {
                this.co = co;
                this.renderNow();
            });

        subs.push(renderSubscription);
        subs.push(this._renderFrame$.pipe(
            map(
                (rc: RenderCamera): GLRenderCameraOperation => {
                    return (irc: GLRenderCamera): GLRenderCamera => {
                        irc.frameId = rc.frameId;
                        irc.perspective = rc.perspective;

                        if (rc.changed === true) {
                            irc.needsRender = true;
                        }

                        return irc;
                    };
                }))
            .subscribe(this._renderCameraOperation$));

        this._renderFrameSubscribe();

        const renderHash$ = this._render$.pipe(
            map(
                (hash: GLRenderHash) => {
                    return (hashes: GLRenderHashes): GLRenderHashes => {
                        hashes[hash.name] = hash.renderer;

                        return hashes;
                    };
                }));

        const clearHash$ = this._clear$.pipe(
            map(
                (name: string) => {
                    return (hashes: GLRenderHashes): GLRenderHashes => {
                        delete hashes[name];

                        return hashes;
                    };
                }));

        subs.push(observableMerge(renderHash$, clearHash$)
            .subscribe(this._renderOperation$));

        this._webGLRenderer$ = this._render$.pipe(
            first(),
            map(
                (): THREE.WebGLRenderer => {
                    canvasContainer.appendChild(canvas);
                    const element = renderService.element;
                    const webGLRenderer = new THREE.WebGLRenderer({ canvas: canvas });
                    patchWebGLRenderer(webGLRenderer);
                    webGLRenderer.setPixelRatio(window.devicePixelRatio);
                    webGLRenderer.setSize(element.offsetWidth, element.offsetHeight);
                    webGLRenderer.autoClear = false;

                    // WebVR
                    console.warn("webxr experiment v0.0.6");
                    console.log("add vr button");
                    canvasContainer.appendChild( VRButton.createButton( webGLRenderer ) );
                    console.log("enable xr");
                    webGLRenderer.xr.enabled = true;
                    webGLRenderer.setAnimationLoop(() => {
                        this.renderNow(false);
                    });

                    return webGLRenderer;
                }),
            publishReplay(1),
            refCount());

        subs.push(this._webGLRenderer$
            .subscribe(() => { /*noop*/ }));

        const createRenderer$ = this._webGLRenderer$.pipe(
            first(),
            map(
                (webGLRenderer: THREE.WebGLRenderer): GLRendererOperation => {
                    return (renderer: GLRendererStatus): GLRendererStatus => {
                        renderer.needsRender = true;
                        renderer.renderer = webGLRenderer;

                        return renderer;
                    };
                }));

        const resizeRenderer$ = this._renderService.size$.pipe(
            map(
                (size: ViewportSize): GLRendererOperation => {
                    return (renderer: GLRendererStatus): GLRendererStatus => {
                        if (renderer.renderer == null) {
                            return renderer;
                        }

                        renderer.renderer.setSize(size.width, size.height);
                        renderer.needsRender = true;

                        return renderer;
                    };
                }));

        const clearRenderer$ = this._clear$.pipe(
            map(
                () => {
                    return (renderer: GLRendererStatus): GLRendererStatus => {
                        if (renderer.renderer == null) {
                            return renderer;
                        }

                        renderer.needsRender = true;

                        return renderer;
                    };
                }));

        subs.push(observableMerge(
            createRenderer$,
            resizeRenderer$,
            clearRenderer$)
            .subscribe(this._rendererOperation$));

        const renderCollectionEmpty$ = this._renderCollection$.pipe(
            filter(
                (hashes: GLRenderHashes): boolean => {
                    return Object.keys(hashes).length === 0;
                }),
            share());

        subs.push(renderCollectionEmpty$
            .subscribe(
                (): void => {
                    if (this._renderFrameSubscription == null) {
                        return;
                    }

                    this._renderFrameSubscription.unsubscribe();
                    this._renderFrameSubscription = null;

                    this._renderFrameSubscribe();
                }));

        subs.push(renderCollectionEmpty$.pipe(
            map(
                (): ForceRendererOperation => {
                    return (eraser: ForceRenderer): ForceRenderer => {
                        eraser.needsRender = true;

                        return eraser;
                    };
                }))
            .subscribe(this._eraserOperation$));
    }

    renderNow = (resetState: boolean = true): void => {
        const co = this.co;
        co.renderer.needsRender = false;
        co.camera.needsRender = false;
        co.eraser.needsRender = false;
        co.trigger.needsRender = false;

        const renderer = co.renderer.renderer;
        const perspectiveCamera = co.camera.perspective;

        const backgroundRenders: GLRenderFunction[] = [];
        const opaqueRenders: GLRenderFunction[] = [];

        if (this.xrWasPresenting != renderer.xr.isPresenting) {
            // change coordinate system
            if (renderer.xr.isPresenting) {
                console.log(perspectiveCamera);
                this.rootScene.matrixAutoUpdate = false;
                this.rootScene.matrix.fromArray(perspectiveCamera.matrixWorldInverse.toArray());
                this.rootScene.matrixWorldNeedsUpdate = true;
            } else {
                this.rootScene.rotation.set(0, 0, 0);
                this.rootScene.position.set(0, 0, 0);
                this.rootScene.updateMatrix();
            }
        }

        for (const render of co.renders) {
            if (render.pass === RenderPass.Background) {
                backgroundRenders.push(render.render);
            } else if (render.pass === RenderPass.Opaque) {
                opaqueRenders.push(render.render);
            }
        }
        this.xrWasPresenting = renderer.xr.isPresenting;

        if (resetState) renderer.resetState();
        renderer.setClearColor(new THREE.Color(0x0F0F0F), 1.0);
        renderer.clear();

        for (const renderBackground of backgroundRenders) {
            renderBackground(perspectiveCamera, renderer, this.rootScene);
        }

        renderer.clearDepth();

        for (const renderOpaque of opaqueRenders) {
            renderOpaque(perspectiveCamera, renderer, this.rootScene);
        }

        if (resetState) renderer.resetState();

        this._opaqueRender$.next();
    }

    public get render$(): Subject<GLRenderHash> {
        return this._render$;
    }

    public get opaqueRender$(): Observable<void> {
        return this._opaqueRender$;
    }

    public get webGLRenderer$(): Observable<THREE.WebGLRenderer> {
        return this._webGLRenderer$;
    }

    public clear(name: string): void {
        this._clear$.next(name);
    }

    public remove(): void {
        this._rendererOperation$.next(
            (renderer: GLRendererStatus): GLRendererStatus => {
                if (renderer.renderer != null) {
                    const extension = renderer.renderer
                        .getContext()
                        .getExtension('WEBGL_lose_context');
                    if (!!extension) {
                        extension.loseContext();
                    }

                    renderer.renderer = null;
                }

                return renderer;
            });

        if (this._renderFrameSubscription != null) {
            this._renderFrameSubscription.unsubscribe();
        }

        this._subscriptions.unsubscribe();
    }

    public triggerRerender(): void {
        this._renderService.renderCameraFrame$
            .pipe(
                skip(1),
                first())
            .subscribe(
                (): void => {
                    this._triggerOperation$.next(
                        (trigger: ForceRenderer): ForceRenderer => {
                            trigger.needsRender = true;
                            return trigger;
                        });
                });
    }

    private _renderFrameSubscribe(): void {
        this._render$.pipe(
            first(),
            map(
                (): GLRenderCameraOperation => {
                    return (irc: GLRenderCamera): GLRenderCamera => {
                        irc.needsRender = true;

                        return irc;
                    };
                }))
            .subscribe(
                (operation: GLRenderCameraOperation): void => {
                    this._renderCameraOperation$.next(operation);
                });

        this._renderFrameSubscription = this._render$.pipe(
            first(),
            mergeMap(
                (): Observable<RenderCamera> => {
                    return this._renderService.renderCameraFrame$;
                }))
            .subscribe(this._renderFrame$);
    }
}
