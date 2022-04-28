const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [true, true, true, true]
  return matrix.reduce((p, c) => {
    return p + c.reduce((pre, cur, i) => {
      const result = (arr[i]) ? cur : 0
      arr[i] = cur !== 0
      return result + pre
    }, 0)
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
