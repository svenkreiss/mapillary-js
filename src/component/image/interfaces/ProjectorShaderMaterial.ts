import { IUniform, ShaderMaterial } from "three";

export interface ProjectorShaderMaterial extends ShaderMaterial {
    uniforms: {
        [uniform: string]: IUniform;
        opacity: IUniform;
        projectorTex: IUniform;
    };
}
