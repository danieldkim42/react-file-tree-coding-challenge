const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.jsx', // entry point,
  output: {
    filename: 'bundle.js', // name of our output file
    path: path.resolve(__dirname, 'dist') // path to our output file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // check for .js and .jsx files (uses Regex)
        exclude: /node_modules/, // don't look in node_modules directory
        use: {
          loader: "babel-loader", // use babel-loader for transpiling
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"] // add the preset env and react
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'] // look for js and jsx files when importing
  },
  devServer: {
    static: './dist', // serve from the dist directory
    hot: true, // enable hot reloading
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // use our index.html file as template
    }),
  ],
};