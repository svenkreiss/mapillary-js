import { IComponentConfiguration } from "./IComponentConfiguration";
import { ComponentSize } from "../utils/ComponentSize";

export interface IBearingConfiguration extends IComponentConfiguration {
    /**
     * The size of the ui elements.
     *
     * @default ComponentSize.Automatic
     */
    size?: ComponentSize;
}
