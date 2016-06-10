var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: 'build',
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'react-hmre']
      }
    }, {
      test: /\.scss$/,
      loaders: [“style”, “css”, “sass”]
    }, {
      test: /\.svg$/,
      loader: ‘file’
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
