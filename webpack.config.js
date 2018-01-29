var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : './example/index.jsx'
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, './dist/example'),
    filename: '[name].js'
  },
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  //其它解决方案配置
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './example',
    hot: true
  }
};