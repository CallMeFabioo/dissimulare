module.exports = {
	bail: 1,
	clearMocks: false,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	testMatch: ['**/__tests__/**/*.js?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	coveragePathIgnorePatterns: ['/node_modules/', '.json'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
};
