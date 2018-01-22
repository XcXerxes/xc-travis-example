const assert = require('assert')

function square(a) {
  return a * a
}
assert.equal(square(2), 4)
assert.equal(square(4), 16)