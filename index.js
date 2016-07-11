/**
 * @param val {*}
 * @returns {Boolean}
 */
function isNothing(val) {
  return val === undefined || val === null;
}
/**
 * @param val {*}
 * @return {Number}
 */
function toNum(val) {
  return isNaN(+val) ? null : +val;
}
/**
 * @param arr {Array.Maybe *}
 * @return {Maybe Number} sum
 */
function sum(arr) {
  return (arr.map(toNum)).reduce((total, val) => (total + (isNothing(val) ? 0 : val)), 0);
}
/**
 * @param val1 {Maybe *}
 * @param val2 {Maybe *}
 * @return {Maybe Number} product
 */
function multiply(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return isNothing(castedVal1) || (isNothing(castedVal2) ? null : (castedVal1 * castedVal2));
}
/**
 * @param val1 {Maybe *}
 * @param val2 {Maybe *}
 * @return {Maybe Number} divided
 */
function div(val1, val2) {
  const castedVal1 = toNum(val1);
  const castedVal2 = toNum(val2);
  return (isNothing(castedVal1) || isNothing(castedVal2) || castedVal2 === 0) ? null : (castedVal1 / castedVal2);
}
/**
 * @param val {Maybe *}
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
  multiply,
}
