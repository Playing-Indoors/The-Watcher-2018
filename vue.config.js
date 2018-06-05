/* eslint-disable no-undef */
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
	configureWebpack: {
		plugins: [
			new PurgecssPlugin({
				whitelistPatterns: [/(_)/, /(-enter)/, /(-leave)/],
				paths: glob.sync([
					path.join(__dirname, './public/index.html'),
					path.join(__dirname, './src/**/*.vue'),
					path.join(__dirname, './src/**/*.js')
				])
			})
		]
	},

	pwa: {
      name: 'The Watcher',
      themeColor: '#000000',
      msTileColor: '#1E1D1E'
    }
};
