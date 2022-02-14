const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new CleanWebpackPlugin(),
    // There should be a better way to load all these modules that doesn't
    // involve typing them out one by one, but I don't know it would be.
    new HtmlWebpackPlugin({
      title: 'BananaKingz Homepage',
      template: './src/index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/home/home.html',
      inject: 'head',
      filename: "home/index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/example/example.html',
      inject: 'head',
      filename: "example/index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/badexample/badexample.html',
      inject: 'head',
      filename: "badexample/index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/conversion/conversion.html',
      inject: 'head',
      filename: "conversion/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};
