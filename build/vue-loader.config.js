module.exports = (isDev) => ({
    loaders: {
        style: 'vue-style-loader!css-loader!sass-loader'
    },
    extractCSS: !isDev, // 默认不会将 .vue 中 css 提取到 css 文件中
    preserveWithSpace: true
    // 可以设置vue处理不同标签的时候使用不同的loader
})