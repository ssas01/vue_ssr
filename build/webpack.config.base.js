const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === "development"
const config = {
    mode: 'production',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,  
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },{
                test: /\.jsx$/,
                exclude: /node_modules/,  
                loader: 'babel-loader'
            },{
                test: /^.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.(gif|png|jpg|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 18432,
                            name: 'resource/[path][name].[hash:8].[ext]'
                        }
                    },
                ]
           }
        ]
    }
}


module.exports = config;