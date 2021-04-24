import { Material, Mesh, Scene, Texture } from "three";

import { ProjectorShaderMaterial } from "../image/interfaces/ProjectorShaderMaterial";

export class MeshScene {
    private _planes: { [key: string]: Mesh };
    private _planesOld: { [key: string]: Mesh };
    private _planesPeriphery: { [key: string]: Mesh };

    private _scene: Scene;
    private _sceneOld: Scene;
    private _scenePeriphery: Scene;

    constructor() {
        this._planes = {};
        this._planesOld = {};
        this._planesPeriphery = {};

        this._scene = new Scene();
        this._sceneOld = new Scene();
        this._scenePeriphery = new Scene();
    }

    public get planes(): { [key: string]: Mesh } {
        return this._planes;
    }

    public get planesOld(): { [key: string]: Mesh } {
        return this._planesOld;
    }

    public get planesPeriphery(): { [key: string]: Mesh } {
        return this._planesPeriphery;
    }

    public get scene(): Scene {
        return this._scene;
    }

    public get sceneOld(): Scene {
        return this._sceneOld;
    }

    public get scenePeriphery(): Scene {
        return this._scenePeriphery;
    }

    public updateImagePlanes(planes: { [key: string]: Mesh }): void {
        this._dispose(this._planesOld, this.sceneOld);

        for (const key in this._planes) {
            if (!this._planes.hasOwnProperty(key)) {
                continue;

            }

            const plane: Mesh = this._planes[key];
            this._scene.remove(plane);
            this._sceneOld.add(plane);
        }

        for (const key in planes) {
            if (!planes.hasOwnProperty(key)) {
                continue;
            }

            this._scene.add(planes[key]);
        }

        this._planesOld = this._planes;
        this._planes = planes;
    }

    public addImagePlanes(planes: { [key: string]: Mesh }): void {
        for (const key in planes) {
            if (!planes.hasOwnProperty(key)) {
                continue;
            }

            const plane: Mesh = planes[key];
            this._scene.add(plane);
            this._planes[key] = plane;
        }
    }

    public addImagePlanesOld(planes: { [key: string]: Mesh }): void {
        for (const key in planes) {
            if (!planes.hasOwnProperty(key)) {
                continue;
            }

            const plane: Mesh = planes[key];
            this._sceneOld.add(plane);
            this._planesOld[key] = plane;
        }
    }

    public setImagePlanes(planes: { [key: string]: Mesh }): void {
        this._clear();
        this.addImagePlanes(planes);
    }

    public addPeripheryPlanes(planes: { [key: string]: Mesh }): void {
        for (const key in planes) {
            if (!planes.hasOwnProperty(key)) {
                continue;
            }

            const plane: Mesh = planes[key];
            this._scenePeriphery.add(plane);
            this._planesPeriphery[key] = plane;
        }
    }

    public setPeripheryPlanes(planes: { [key: string]: Mesh }): void {
        this._clearPeriphery();
        this.addPeripheryPlanes(planes);
    }

    public setImagePlanesOld(planes: { [key: string]: Mesh }): void {
        this._clearOld();
        this.addImagePlanesOld(planes);
    }

    public clear(): void {
        this._clear();
        this._clearOld();
    }

    private _clear(): void {
        this._dispose(this._planes, this._scene);
        this._planes = {};
    }

    private _clearOld(): void {
        this._dispose(this._planesOld, this._sceneOld);
        this._planesOld = {};
    }

    private _clearPeriphery(): void {
        this._dispose(this._planesPeriphery, this._scenePeriphery);
        this._planesPeriphery = {};
    }

    private _dispose(planes: { [key: string]: Mesh }, scene: Scene): void {
        for (const key in planes) {
            if (!planes.hasOwnProperty(key)) {
                continue;
            }

            const plane: Mesh = planes[key];
            scene.remove(plane);
            plane.geometry.dispose();
            (<Material>plane.material).dispose();
            let texture: Texture = (<ProjectorShaderMaterial>plane.material).uniforms.projectorTex.value;
            if (texture != null) {
                texture.dispose();
            }
        }
    }
}
