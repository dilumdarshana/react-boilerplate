const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: '000.000.00.00',
        historyApiFallback: true,
        port: process.env.port || 6001,
    },
});
