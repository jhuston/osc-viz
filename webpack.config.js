// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?presets[]=es2015&presets[]=react', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
    ]
  }
}
