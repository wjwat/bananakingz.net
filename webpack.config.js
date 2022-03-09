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
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/home/home.html',
      filename: "home/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/quotes/quotes.html",
      filename: "quotes/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/about/about.html",
      filename: "about/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/jokes/jokes.html",
      filename: "jokes/index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/conversion/conversion.html',
      filename: "conversion/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/facts/facts.html",
      filename: "facts/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/pong/pong.html",
      filename: "pong/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/bph/bph.html",
      filename: "bph/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/tictacbanana/tictacbanana.html",
      filename: "tictacbanana/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/jump/jump.html",
      filename: "jump/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/modules/rpb/rpb.html",
      filename: "rpb/index.html"
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
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/img/',
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: false
        }
      },
    ]
  }
};
