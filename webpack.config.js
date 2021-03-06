const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'www'),
  entry: [
    './index.jsx', 'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader', 'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          },
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    // // OccurenceOrderPlugin is needed for webpack 1.x only
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
};