import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import {
    esmOutput,
    srcInput as input,
    plugins,
    treeshake,
    umdOutput,
} from './config/rollup.js';

const unminifiedOutput = Object.assign(
    { file: 'dist/mapillary.unminified.js' },
    umdOutput);

const minifiedOutput = Object.assign(
    { file: 'dist/mapillary.js' },
    umdOutput);

const bundles = [
    {
        input,
        output: [
            esmOutput
        ],
        plugins,
        treeshake,
    },
    {
        input,
        output: [
            unminifiedOutput
        ],
        plugins,
        treeshake,
    },
    {
        input,
        output: [
            minifiedOutput,
        ],
        plugins: [
            ...plugins,
            terser(),
        ],
        treeshake,
    },
    {
        input: 'build/esm/src/mapillary.d.ts',
        output: [
            {
                file: 'dist/mapillary.d.ts',
                format: 'es',
            }
        ],
        plugins: [
            dts(),
        ],
    },
];

export default bundles;
