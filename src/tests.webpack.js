// https://github.com/webpack/karma-webpack#alternative-usage
var testsContext = require.context('./test', true, /.+\.js$/);
testsContext.keys().forEach(testsContext);
