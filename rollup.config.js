import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{
			name: pkg.name,
			file: pkg.browser,
			format: 'umd',
			plugins: [terser()],
		},
		{
			name: pkg.name,
			format: 'cjs',
			file: pkg.main,
		},
		{
			name: pkg.name,
			format: 'es',
			file: pkg.module,
		},
	],
	plugins: [resolve()],
};
