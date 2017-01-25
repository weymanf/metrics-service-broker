const JasmineAsync = require('jasmine-async-suite');

JasmineAsync.install();

afterAll(() => {
  JasmineAsync.uninstall();
  ['jasmine-async-suite', __filename].map(require.resolve).forEach(i => delete require.cache[i]);
});