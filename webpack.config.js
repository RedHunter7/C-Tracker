const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({template: './src/index.html', filename: "./index.html", inject: "body", favicon: "./src/style/images/C-Tracker.png"}),
      new MiniCssExtractPlugin({filename: '[name].css',chunkFilename: "[id].css"})
  ],
};