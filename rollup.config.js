import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'dissimulare',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**',
			}),
			terser(),
		],
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'src/index.js',
		output: [
			{ name: 'dissimulare', format: 'cjs', file: pkg.main },
			{ name: 'dissimulare', format: 'es', file: pkg.module },
		],
		plugins: [terser()],
	},
];
