/**
 * @param val {*}
 * @returns {Boolean}
 */
function isNothing(val) {
  return val === undefined || val === null;
}
/**
 * @param val Maybe {*}
 * @return {Maybe Number}
 */
function toNum(val) {
  if (isNothing(val)) return null;
  return isNaN(+val) ? null : +val;
}
/**
 * @param {Array.Maybe *} arr
 * @return {Maybe Number} sum
 */
function sum(arr) {
  return (arr.map(toNum)).reduce((total, val) => (total + (isNothing(toNum(val)) ? 0 : val)), 0);
}

function minus(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? null : (castedVal1 - castedVal2);
}

function more(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? false : (castedVal1 > castedVal2);
}

function moreEq(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? false : (castedVal1 >= castedVal2);
}

function less(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? false : (castedVal1 < castedVal2);
}

function lessEq(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? false : (castedVal1 <= castedVal2);
}

/**
 * @param {Maybe *} val1
 * @param {Maybe *} val2
 * @return {Maybe Number} product
 */
function multiply(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2)) ? null : (castedVal1 * castedVal2);
}
/**
 * @param {Maybe *} val1
 * @param {Maybe *} val2
 * @return {Maybe Number} divided
 */
function div(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2) || castedVal2 === 0) ? null : (castedVal1 / castedVal2);
}
/**
 * @param {Maybe *} val
 * @return {Maybe Number} rounded
 */
function round(val) {
  const castedVal = toNum(val);
  return isNothing(castedVal) ? null : Math.round(castedVal);
}

module.exports = {
  sum,
  round,
  div,
  toNum,
  multiply,
  minus,
  more,
  moreEq,
  less,
  lessEq
}
