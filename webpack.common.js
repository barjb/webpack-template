const path = require('path');
//const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: './index.js',
        vendor: './vendors/vendor.js',
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [{ from: './assets', to: './assets' }],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
