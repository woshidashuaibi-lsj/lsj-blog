const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  devServer: {
    static: { directory: path.join(__dirname) },
    compress: false,
    port: 6001,
    hot: false
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html',
      template: './index.html',
      minify: false,
      inject: false,
      templateParameters: {
        publicPath: path.join(__dirname),
        js: ['./node_modules/vue/dist/vue.runtime.global.js', './index.js'],
        css: ['./index.css']
      }
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
  },
  devtool: 'inline-cheap-module-source-map',
  externals: {
    vue: 'window.Vue'
  }
};
