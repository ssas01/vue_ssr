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
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin({
        template: path.join(__dirname, '../client/index.html')
    })
]
let config;
if (isDev) {
    config = merge(baseConfig, {
        mode: 'development',
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
            port: 8000,
            overlay: {
                errors: true
            },
            historyApiFallback: true,
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
} else {
    config = merge(baseConfig,{
        mode: 'production',
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            'sass-loader'
                        ]
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            })
        ]),
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "vendor",
                        chunks: "initial",
                        minChunks: 2
                    }
                }
            }
        }
    })
}

module.exports = config;