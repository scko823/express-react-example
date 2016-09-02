let webpack = require('webpack')
let path = require('path')
module.exports = {
	entry: path.join(__dirname,'js','entry.jsx'),
	output:{
		path:path.join(__dirname, 'public'),
		filename:'bundle.js'
	},
	module: {
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:'node_modules',
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}