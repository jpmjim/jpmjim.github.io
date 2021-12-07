const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel_loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}