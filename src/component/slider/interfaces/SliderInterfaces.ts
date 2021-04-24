import { Vector3 } from "three";

import { Image } from "../../../graph/Image";
import { IAnimationState } from "../../../state/interfaces/IAnimationState";
import { SliderGLRenderer } from "../SliderGLRenderer";

export interface SliderImages {
    background: Image;
    foreground: Image;
}

export interface SliderCombination {
    images: SliderImages;
    state: IAnimationState;
}

export interface GLRendererOperation {
    (glRenderer: SliderGLRenderer): SliderGLRenderer;
}

export type PositionLookat = [
    Vector3,
    Vector3,
    number,
    number,
    number,
];
