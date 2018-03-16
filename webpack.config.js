const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

const config = {
  entry: './index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ordered-cartesian-product.js',
    libraryTarget: "var",
    library: 'OrderedCartesianProduct',
    sourceMapFilename: 'ordered-cartesian-product.js.map'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version}\n\n${pkg.description}`
    })
  ]
};

module.exports = config;
