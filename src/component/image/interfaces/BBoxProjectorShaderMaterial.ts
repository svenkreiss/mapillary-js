import { IUniform } from "three";
import { ProjectorShaderMaterial } from "./ProjectorShaderMaterial";

export interface BBoxProjectorShaderMaterial extends ProjectorShaderMaterial {
    uniforms: {
        [uniform: string]: IUniform;
        opacity: IUniform;
        projectorTex: IUniform;
        bbox: IUniform;
    };
}
