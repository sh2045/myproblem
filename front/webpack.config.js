const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          reportFiles: ['src/**/*.{ts,tsx}']
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    })
  ],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.[hash].js'
  },
  plugins: [new CleanWebpackPlugin()]
};
