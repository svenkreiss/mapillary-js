import {
    CircleGeometry,
    Material,
    Mesh,
    MeshBasicMaterial,
    Object3D,
} from "three";
import { LngLat } from "../../../api/interfaces/LngLat";
import { CircleMarkerOptions } from "../interfaces/CircleMarkerOptions";
import { Marker } from "./Marker";

/**
 * @class CircleMarker
 *
 * @classdesc Non-interactive marker with a flat circle shape. The circle
 * marker can not be configured to be interactive.
 *
 * Circle marker properties can not be updated after creation.
 *
 * To create and add one `CircleMarker` with default configuration
 * and one with configuration use
 *
 * @example
 * ```js
 * var defaultMarker = new mapillary.MarkerComponent.CircleMarker(
 *     "id-1",
 *     { lat: 0, lng: 0, });
 *
 * var configuredMarker = new mapillary.MarkerComponent.CircleMarker(
 *     "id-2",
 *     { lat: 0, lng: 0, },
 *     {
 *         color: "#0Ff",
 *         opacity: 0.3,
 *         radius: 0.7,
 *     });
 *
 * markerComponent.add([defaultMarker, configuredMarker]);
 * ```
 */
export class CircleMarker extends Marker {
    private _color: number | string;
    private _opacity: number;
    private _radius: number;

    constructor(id: string, lngLat: LngLat, options?: CircleMarkerOptions) {
        super(id, lngLat);

        options = !!options ? options : {};
        this._color = options.color != null ? options.color : 0xffffff;
        this._opacity = options.opacity != null ? options.opacity : 0.4;
        this._radius = options.radius != null ? options.radius : 1;
    }

    protected _createGeometry(position: number[]): void {
        const circle: Mesh = new Mesh(
            new CircleGeometry(this._radius, 16),
            new MeshBasicMaterial({
                color: this._color,
                opacity: this._opacity,
                transparent: true,
            }));

        circle.up.fromArray([0, 0, 1]);
        circle.renderOrder = -1;

        const group: Object3D = new Object3D();
        group.add(circle);
        group.position.fromArray(position);

        this._geometry = group;
    }

    protected _disposeGeometry(): void {
        for (let mesh of <Mesh[]>this._geometry.children) {
            mesh.geometry.dispose();
            (<Material>mesh.material).dispose();
        }
    }

    protected _getInteractiveObjects(): Object3D[] {
        return [];
    }
}
