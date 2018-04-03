//全局安装webpack webpack-cli

var webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
module.exports = {
	//入口
	entry: './entry/entry.js',
	//出口
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
	//开发版本
	mode: "development",
	//引入完整版本的vue
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置loader 处理非js类型的文件
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif|woff|ttf)$/,
			use: [{
				loader: 'file-loader',
			}]
		}, {
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.(vue)$/,
			use: {
				loader: 'vue-loader',
			}
		}]
	},
	//开启监听模式
	// watch: true,
	//插件
	plugins: [
		//new UglifyJsPlugin(),
		//new HtmlWebpackPlugin({template: './src/index.html'})
	],
	//全局安装webpack配置好的服务器 webpack-dev-server
	devServer: {
		contentBase: "./output", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		port: 12345,
		//port 设置默认监听端口，如果省略，默认为”8080“
		inline: true //实时刷新
	}
}
