
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import path from "path";
import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import virtual from '@rollup/plugin-virtual';

const virtualModules = {
    './getXMLHttpRequest': `
    export default function getXMLHttpRequest() {
        return new XmlHTTPRequest();
    }`,
    'domain': 'export default undefined;',
};

const resolveOptions = { preferBuiltins: false };

const threeReplacement =
    path.resolve(__dirname, 'node_modules/three/src/Three');

export const aliasPlugin = alias({
    entries: [
        { find: 'three', replacement: threeReplacement },
    ],
});

export const otherPlugins = [
    sourcemaps(),
    virtual(virtualModules),
    resolve(resolveOptions),
    commonjs(),
];

export const plugins = otherPlugins.slice();
plugins.splice(1, 0, aliasPlugin);

export const treeshake = {
    moduleSideEffects: false,
}

export const umdOutput = {
    format: 'umd',
    name: 'mapillary',
    sourcemap: true,
}

export const esmOutput = {
    file: 'dist/mapillary.module.js',
    format: 'es',
    sourcemap: true,
};

export const srcInput = 'build/esm/src/mapillary.js';
