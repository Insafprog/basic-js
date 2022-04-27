const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  indexes = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25}
  keys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }
  
  encrypt(message, key) {
    let index = 0
    if(message === undefined || key === undefined) throw new Error("Incorrect arguments!")
    const messageArray = message.split("")
    const keyArray = key.split("")
    const result = messageArray.map((element, i) => {
      const number = (this.indexes[element.toUpperCase()] + this.indexes[keyArray[index%keyArray.length].toUpperCase()])%26
      if (isNaN(number)) return element
      index++
      return this.keys[number]
    });
    return this.isDirect ? result.join("") : result.reverse().join("")
  }
  decrypt(message, key) {
    let index = 0
    if(message === undefined || key === undefined) throw new Error("Incorrect arguments!")
    const messageArray = message.split("")
    const keyArray = key.split("")
    const result = messageArray.map((element, i) => {
      const number = (this.indexes[element.toUpperCase()] - this.indexes[keyArray[index%keyArray.length].toUpperCase()] + 26)%26
      if (isNaN(number)) return element
      index++
      return this.keys[number]
    })
    return this.isDirect ? result.join("") : result.reverse().join("")
  }
}

module.exports = {
  VigenereCipheringMachine
};
