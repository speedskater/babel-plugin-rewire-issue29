module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],

        files: [
            'src/tests.webpack.js'
        ],

        plugins: [
            'karma-mocha',
            'karma-webpack',
        ],

        preprocessors: {
            'src/tests.webpack.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [{ test: /\.js$/, loader: 'babel-loader?plugins=babel-plugin-rewire', }]
            }
        },

        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [],
        singleRun: true
    });
};
