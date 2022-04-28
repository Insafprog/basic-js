const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n.toString().split("").reduce((p, _, ci, arr) => {
    return Math.max(p, +[...arr].filter((_, i) => ci!==i).join(""))
  }, 0)
}

module.exports = {
  deleteDigit
};

// console.log(deleteDigit(152));
