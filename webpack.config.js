const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const title = 'My React App' // EDIT THIS

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'resources/favicon.ico',
      template: 'resources/index.html',
      title,
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
}
