module.exports = (isDev) => ({
    loaders: {
        style: 'vue-style-loader!css-loader!sass-loader'
    },
    extractCSS: !isDev, // 默认不会将 .vue 中 css 提取到 css 文件中
    preserveWithSpace: true
    // 其实vue处理不同标签(还有不同lang)的时候使用不同的loader

})