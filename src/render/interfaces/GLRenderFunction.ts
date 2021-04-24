import { PerspectiveCamera, WebGLRenderer } from "three";

export interface GLRenderFunction extends Function {
    (
        perspectiveCamera: PerspectiveCamera,
        renderer: WebGLRenderer,
    ): void;
}
