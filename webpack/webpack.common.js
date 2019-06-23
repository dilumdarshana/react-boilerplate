const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
});

const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[name].css',
});

module.exports = {
    entry: ['./src/'],
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.[hash].js',
    },
    devServer: {
        host: '000.000.00.00',
        historyApiFallback: true,
        port: process.env.port || 6001,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [htmlPlugin, cssPlugin],
    resolve: {
        extensions: ['.js', '.css', '.scss'],
    },
};
