module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	env: {
		browser: true,
		mocha: true,
	},
	extends: [
		'prettier',
		'prettier/standard',
		'plugin:vue/essential',
		'airbnb-base',
	],
	globals: {
		expect: true,
		sinon: true,
	},
	plugins: ['vue', 'prettier'],
	rules: {
		//'import/no-unresolved': 'off',
		//indent: ['error', 'tab'],
		'import/no-extraneous-dependencies': 0,
		indent: 'off',
		'no-unused-expressions': ['error', { allowTernary: true }],
		'linebreak-style': 0,
		'object-curly-newline': 0,
		'eslint linebreak-style': [0, 'error', 'windows'],
		'no-tabs': 0,
		'space-before-function-paren': 0,
		'operator-linebreak': 0,
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc', // for reduce accumulators
					'accumulator', // for reduce accumulators
					'e', // for e.returnvalue
					'ctx', // for Koa routing
					'req', // for Express requests
					'request', // for Express requests
					'res', // for Express responses
					'response', // for Express responses
					'$scope', // for Angular 1 scopes
					//Added by us
					'state', // for Vuex mutations
					'Vue',
				],
			},
		],
		'no-underscore-dangle': ['error', { allow: ['__env'] }],
		'comma-dangle': ['error', 'always-multiline'],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
};
