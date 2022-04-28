const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length < 2) return str
  return str.split("").reduce((p, c) => {
    if(p === 0) return [c]
    if(p[p.length - 1] === c) {
      if(p.length === 1) return [2, c]
      else if(Number.isInteger(p[p.length - 2])){
         p[p.length - 2]++
         return p
      }
      else p[p.length - 1] = 2
    }
    p.push(c)
    return p
  }, 0).join("")
}

module.exports = {
  encodeLine
};

// console.log(encodeLine("aabbbc"));
