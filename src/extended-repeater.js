const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1
  if (options.separator === undefined) options.separator = '+'
  if (options.addition === undefined) options.addition = ""
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1
  if (options.additionSeparator === undefined) options.additionSeparator = '|'
  return new Array(options.repeatTimes).fill(str + new Array(options.additionRepeatTimes).fill("" + options.addition).join(options.additionSeparator)).join(options.separator)
}

module.exports = {
  repeater
};

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))