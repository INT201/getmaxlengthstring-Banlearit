const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString === null || undefined) {
    return undefined;
  }else if (arrayOfString[arrayOfString.length-1]){
    return arrayOfString;
  }

}
module.exports = getMaxLengthString
