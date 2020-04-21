import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs', esModule: false },
		{ file: pkg.module, format: 'esm', esModule: false },
		{
			name: pkg.name,
			file: pkg.browser,
			format: 'umd',
		},
	],
	plugins: [resolve(), terser()],
};
