import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'esm' },
		{
			name: pkg.name,
			file: pkg.browser,
			format: 'umd',
			plugins: [terser()],
		},
	],
	plugins: [resolve()],
};
