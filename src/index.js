module.exports = function multiply(first, second) {
  // your solution
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  let multArr = [];
  let mult = "";

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      
      if (!isNaN(multArr[i + j])) { 
        multArr[i + j] += firstArr[i] * secondArr[j];
      } else {
        multArr[i + j] = firstArr[i] * secondArr[j];
      }
    }
  }
    
  let multArrLength = multArr.length;
  for (i = 0; i < multArrLength; i++) {
    while (multArr[i] > 9) {
      if (!isNaN(multArr[i + 1])) {
        multArr[i + 1] += Math.floor(multArr[i] / 10);
      } else {
        multArr[i + 1] = Math.floor(multArr[i] / 10);
      }
      multArr[i] = multArr[i] % 10;
    }
  }

  for (i = multArr.length - 1; i >= 0; i--)
    mult += multArr[i];

  return mult;
}
