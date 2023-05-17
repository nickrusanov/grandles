const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd
	},

	autoPrefixer: {
		grid: true,
		overrideBrowserslist: 'last 5 versions',
	},

	sass: {
		outputStyle: 'expanded'
	},

	rename: {
		suffix: '.min'
	},

	babel: {
		presets: ['@babel/env', '@babel/preset-react']
	},

	webpack: {
		mode: isProd ? 'production' : 'development',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: { presets: ['@babel/env', '@babel/preset-react'] },
				}
			]
		},
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	}
}