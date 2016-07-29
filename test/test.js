var safe = require('../');
var assert = require('assert');

describe('All', () => {

  it('toNum', () => {
    assert.equal(safe.toNum(null), null);
    assert.equal(safe.toNum(undefined), null);
    assert.equal(safe.toNum(undefined), null);
    assert.equal(safe.toNum("45"), 45);
    assert.equal(safe.toNum(NaN), null);
    assert.equal(safe.toNum({}), null);
  })

  it('multiply', () => {
    assert.equal(safe.multiply(null, 4), null);
    assert.equal(safe.multiply(null, null), null);
    assert.equal(safe.multiply(2, undefined), null);
    assert.equal(safe.multiply(0, 0), 0);
    assert.equal(safe.multiply(2, '2'), 4);
    assert.equal(safe.multiply('2', '2'), 4);
    assert.equal(safe.multiply('t', '2'), null);
  })

  it('sum', () => {
    assert.equal(safe.sum([null, null, null]), 0);
    assert.equal(safe.sum([undefined, null, 2]), 2);
    assert.equal(safe.sum(['f', '3', 'er']), 3);
    assert.equal(safe.sum(['2', '3', 'er']), 5);
    assert.equal(safe.sum(['2', null, 'er']), 2);
  });

  it('div', () => {
    assert.equal(safe.div(null, 0), null);
    assert.equal(safe.div(null, null), null);
    assert.equal(safe.div(null, undefined), null);
    assert.equal(safe.div(2, 1), 2);
    assert.equal(safe.div('2', 1), 2);
    assert.equal(safe.div('2', 'er'), null);
    assert.equal(safe.div('2', 0), null);
  });

  it('round', () => {
    assert.equal(safe.round('df'), null);
    assert.equal(safe.round(undefined), null);
    assert.equal(safe.round(null), null);
    assert.equal(safe.round('7.2'), 7);
  })

  it('minus', () => {
    assert.equal(safe.minus(null, 2), null);
    assert.equal(safe.minus(3, 2), 1);
    assert.equal(safe.minus('3', '2'), 1);
    assert.equal(safe.minus(NaN, '2'), null);
  });

  it('more', () => {
    assert.equal(safe.more(null, 2), false);
    assert.equal(safe.more(3, 2), true);
    assert.equal(safe.more(3, 3), false);
  });

  it('moreEq', () => {
    assert.equal(safe.moreEq(null, 2), false);
    assert.equal(safe.moreEq(3, 2), true);
    assert.equal(safe.moreEq(3, 3), true);
  });

});