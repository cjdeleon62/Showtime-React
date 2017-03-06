const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}
