const ExtractPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
// 如果是生产环境，多使用一个字段。可以使用这种方式，可以将生产环境配置和产品环境配置分开
if (isDev) {
    // 区分环境的安装
    config.module.rules.push({
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    })
    config.devtool = "#cheap-module-eval-source-map";
    config.devServer = {
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            errors: true
        },
        // open 自动打开浏览器， historyApiFallback 未指定的制定到 index.html 页面，
        // hot 当只改动了某个组件，那么只刷新这个组件，而不是整个页面，这样页面上数据依旧存在
        // 配合下面两个插件使用
        hot: true,
        inline: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractPlugin.extract({
            fallback: "style-loader",
            use: [
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        })
    })
    config.plugins.push(
        new ExtractPlugin('styles.[hash:8].css'),
    )
    config.optimization = {
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
}
