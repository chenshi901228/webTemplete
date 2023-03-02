const pxtorem = require("postcss-pxtorem")

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [pxtorem({
                    rootValue: 16, // 根字体大小
                    unitPrecision: 5,
                    propList   : ['*'],
                    selectorBlackList  : [],
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 0,
                    exclude: /node_modules/i
                })]
            }
        }
    },
    // 默认打开eslint效验，如果需要关闭，设置成false即可
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 8001,
        overlay: {
            errors: true,
            warnings: true
        },
    },
    runtimeCompiler: true
}