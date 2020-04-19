import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'disguise',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			resolve(), // so Rollup can find `dependency`
			commonjs(), // so Rollup can convert `dependency` to an ES module
			babel({
				exclude: 'node_modules/**',
			}),
		],
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'src/index.js',
		// external: ['dependency'],
		output: [
			{ name: 'disguise', format: 'cjs', file: pkg.main },
			{ name: 'disguise', format: 'es', file: pkg.module },
		],
	},
];
