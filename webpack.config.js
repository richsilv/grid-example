const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

const html = new HtmlWebpackPlugin({
  hash: true,
  template: './src/index.html'
})
const offline = new OfflinePlugin()
const prepack = new PrepackWebpackPlugin({})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  plugins: [html, offline, prepack],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
}
