import alias from '@rollup/plugin-alias';
import path from "path";
import {
    esmOutput,
    srcInput as input,
    otherPlugins,
    treeshake,
} from './rollup.js';

const threeReplacement =
    path.resolve(__dirname, '../node_modules/three/src/Three');

const aliasPlugin = alias({
    entries: [
        { find: 'three', replacement: threeReplacement },
    ],
});

const plugins = otherPlugins.slice();
plugins.splice(1, 0, aliasPlugin);

export default {
    input,
    output: [
        esmOutput,
    ],
    plugins,
    treeshake,
}
