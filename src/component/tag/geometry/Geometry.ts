/// <reference path="../../../../typings/index.d.ts" />

import * as rx from "rx";

import {Transform} from "../../../Geo";

export abstract class Geometry {
    protected _notifyChanged$: rx.Subject<Geometry>;

    constructor() {
        this._notifyChanged$ = new rx.Subject<Geometry>();
    }

    public get changed$(): rx.Observable<Geometry> {
        return this._notifyChanged$;
    }

    public abstract getCentroid3d(transform: Transform): number[];

    public abstract setCentroid2d(value: number[], transform: Transform): void;
}

export default Geometry;