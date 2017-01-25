if (!require('path').resolve(__dirname).match(/dist$/)) {
  require('babel-core/register');
}
require('babel-polyfill');

var appThunk = require('./service_broker');
var app = appThunk();
app.listen(process.env.PORT || 3000);

module.exports = app;