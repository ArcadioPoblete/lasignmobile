const path = require('path');

const basePath = __dirname;
const distPath = 'dist';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extendion: ['.js']
    },
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: path.join(basePath,distPath),
        filename: '[chunkhash][name].js'
    }
};

module.exports = webpackInitConfig;