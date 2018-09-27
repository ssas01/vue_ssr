const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'
const defaultPlugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: '"development"'
        }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin({
        template: path.join(__dirname, "../practice/template.html")
    })
]
let config;
config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: "#cheap-module-eval-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            errors: true
        },
        hot: true,
        inline: true
    },
    // resolve: {
    //     alias: {
    //         'vue': path.join(__dirname, "../node_modules/vue/dist/vue.esm.js")
    //     }
    // },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ])
})

module.exports = config;