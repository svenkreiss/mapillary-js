import { InteractiveStateBase } from "./InteractiveStateBase";
import { IStateBase } from "../interfaces/IStateBase";
import { Image } from "../../graph/Image";
import { isSpherical } from "../../geo/Geo";

export class InteractiveWaitingState extends InteractiveStateBase {
    constructor(state: IStateBase) {
        super(state);

        this._adjustCameras();

        this._motionless = this._motionlessTransition();
    }

    public prepend(images: Image[]): void {
        super.prepend(images);

        this._motionless = this._motionlessTransition();
    }

    public set(images: Image[]): void {
        super.set(images);

        this._motionless = this._motionlessTransition();
    }

    public move(delta: number): void {
        this._alpha = Math.max(0, Math.min(1, this._alpha + delta));
    }

    public moveTo(position: number): void {
        this._alpha = Math.max(0, Math.min(1, position));
    }

    public update(fps: number): void {
        this._updateRotation();
        if (!this._rotationDelta.isZero) {
            this._applyRotation(this._rotationDelta, this._previousCamera);
            this._applyRotation(this._rotationDelta, this._currentCamera);
        }

        this._updateRotationBasic();
        if (this._basicRotation[0] !== 0 || this._basicRotation[1] !== 0) {
            this._applyRotationBasic(this._basicRotation);
        }

        let animationSpeed: number = this._animationSpeed * (60 / fps);
        this._updateZoom(animationSpeed);
        this._updateLookat(animationSpeed);

        this._camera.lerpCameras(this._previousCamera, this._currentCamera, this.alpha);
    }

    protected _getAlpha(): number {
        return this._motionless ? Math.round(this._alpha) : this._alpha;
    }

    protected _setCurrentCamera(): void {
        super._setCurrentCamera();

        this._adjustCameras();
    }

    private _adjustCameras(): void {
        if (this._previousImage == null) {
            return;
        }

        if (isSpherical(this._currentImage.cameraType)) {
            let lookat: THREE.Vector3 = this._camera.lookat.clone().sub(this._camera.position);
            this._currentCamera.lookat.copy(lookat.clone().add(this._currentCamera.position));
        }

        if (isSpherical(this._previousImage.cameraType)) {
            let lookat: THREE.Vector3 = this._currentCamera.lookat.clone().sub(this._currentCamera.position);
            this._previousCamera.lookat.copy(lookat.clone().add(this._previousCamera.position));
        }
    }
}
