const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  function counterElement(array, element) {
    return array.filter(e => e === element).length
  }

  const s1_arr = s1.split("")
  const s2_arr = s2.split("")
  const includes = [... new Set(s1_arr.filter(ch => s2_arr.includes(ch)))]
  return includes.reduce((p, c) => {
    return p + Math.min(counterElement(s1_arr, c), counterElement(s2_arr, c))
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};

console.log(getCommonCharacterCount("aabcc", "adcaa"));