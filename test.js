var assert = require('assert');
var nwVersions = require('./index.js');

assert.strictEqual(typeof(nwVersions.latest), 'string');
assert.strictEqual(typeof(nwVersions.stable), 'string');
assert.strictEqual(nwVersions.latest[0], 'v');
assert.strictEqual(nwVersions.stable[0], 'v');
assert.strictEqual(nwVersions.lts, 'v0.14.7');
assert.strictEqual(nwVersions.versions.length > 200, true);
