const path = require('path');


module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app'),
    },
    devServer:{
        watchFiles: [
            "app/**/*.html",
        ],
        static: {
            directory: path.join(__dirname, 'app'),
            watch: false,
        },
        hot: true,
        port: 3000,
    },
    // I commented this because we setup devServer
    // watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-import'),
                                    require('postcss-mixins'), 
                                    require('postcss-simple-vars'), 
                                    require('postcss-nested'), 
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
}