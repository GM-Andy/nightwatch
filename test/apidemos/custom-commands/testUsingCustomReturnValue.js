const assert = require('assert');

describe('custom command return value', function() {
  it('object-style async command', async function(browser) {
    const result = await browser.returnValueObject('/some/path');

    assert.strictEqual(result, '/some/path');
  });
});
