const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/component.js',
  output: {
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/(.*)CUSTOMER(\.*)/, function (resource) {
      const customerName = process.env.REACT_APP_CUSTOMER || 'default';
      resource.request = resource.request.replace(/CUSTOMER/, customerName);
    })
  ]
};