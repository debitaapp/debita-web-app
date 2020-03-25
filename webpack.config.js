const webpack = require('webpack')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')
const autoPreprocess = require('svelte-preprocess')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV
console.log(mode)
const dev = mode === 'development'

const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']
const cssConfig = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    'isomorphic-style-loader',
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
  ],
}
const sveltPreprocess = autoPreprocess({
  postcss: true,
  scss: false,
  stylus: false,
  typescript: false,
  coffeescript: false,
  less: false,
  pug: false,
})

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { extensions, mainFields },
    module: {
      rules: [
        cssConfig,
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              preprocess: sveltPreprocess,
              dev,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
            },
          },
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash:5].css',
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        cssConfig,
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              preprocess: sveltPreprocess,
              css: false,
              generate: 'ssr',
              dev,
            },
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash:5].css',
      }),
    ].filter(Boolean),
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV,
  },
}
