const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    module: {
        //不去解析jquery的依赖关系，可以省打包时间
        noParse: /jquery/,
        rules: [
            {
                test: /\.js$/, use: {
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
        // 自动把js插入到指定到html
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ]
}