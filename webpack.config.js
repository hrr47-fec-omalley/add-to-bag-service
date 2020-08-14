// const merge = require('webpack-config-merge');
// const common = require('./webpack.common.js');

var path = require('path');

// module.exports = merge(common, {
module.exports = {

  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './client'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        },


      }, {
        test: /\.css$/,
        use: [ 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }
        ]
      }
    ]
  }
};
