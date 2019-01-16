const path = require( "path" );

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
	},
	output: {
		path: path.resolve( "js", "dist" ),
		filename: "[name].js",
	},
	externals: {
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					"babel-loader",
				]
			}
		]
	},
};
