module.exports = {
	root: true,
	parserOptions: { parser: 'babel-eslint' },
	extends: ['plugin:vue/essential', '@vue/prettier'],
	globals: {
		process: true,
		module: true,
		require: true
	},
	rules: {
		'vue/attribute-hyphenation': ['error', 'always'],
		'vue/html-end-tags': 'error',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': 'error',
		'vue/require-default-prop': 'error',
		'vue/require-prop-types': 'error',
		'vue/attributes-order': 'error',
		'vue/html-quotes': ['error', 'double'],
		'vue/order-in-components': 'error',
		'no-console': 'off'
	}
};
