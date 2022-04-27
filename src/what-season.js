const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  try {
    date.getTime()
    const month = date.getMonth()
    if (month === 11 || month < 2) return 'winter'
    if (1 < month && month < 5) return 'spring'
    if (4 < month && month < 8) return 'summer'
    if (7 < month && month < 11) return 'autumn'
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};