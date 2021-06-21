const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //自动打开浏览器
        open: true,
        // compress: true,
        port: 9000,
    },
    module: {
        //不去解析jquery的依赖关系，可以省打包时间
        noParse: /jquery/,
        rules: [
            {
                test: /\.js$/,
                // 不用处理的js
                exclude: /node_modules/,
                // 只需处理的js
                include: path.resolve('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // 在引入某个库的时候需要去读取哪些任务清单，查看是否已经有该打包好的包
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),


        // 自动把js插入到指定到html
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        // 引入第三方包中指定一些没必要的引入 moment包不允许引入locale
        new webpack.IgnorePlugin({ resourceRegExp: /\.\/locale/, contextRegExp: /moment/ })

    ]
}