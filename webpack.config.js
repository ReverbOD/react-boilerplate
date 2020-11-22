const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: 'images'
                }
            }
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: './public/index.html'
  })
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000
  }
}