const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) return undefined;
  let max_str = arrayOfString[0].length;
  let ans = arrayOfString[0];

    for (let i = 1; i < arrayOfString.length; i++) {
        const maxi = arrayOfString[i].length;
        if (maxi > max_str) {
            ans = arrayOfString[i];
            max_str = maxi;
        }
    }
  return [ans];

}
module.exports = getMaxLengthString
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']))







