module.exports = function toReadable (number) {
    let readableNum = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety', 
  }

  let num = String(number).split('');

  if (num.length === 1) {
    
      return `${readableNum[number]}`;
    
  }

  if (number >= 10 && number <= 19) {
   
      return `${readableNum[number]}`;
   }

  if ((number === 20) ||
    (number === 30) || 
    (number === 40) ||
    (number === 50) ||
    (number === 60) ||
    (number === 70) ||
    (number === 80) ||
    (number === 90)) {
     
      return `${readableNum[number]}`;
    }

  if (num.length === 2) {
    let numberTenth = (number - (number % 10));
    let numberSecond = (number % 10);
   
      return `${readableNum[numberTenth]} ${readableNum[numberSecond]}`;
    
  }

  if (num.length === 3) {
    let hundredNumber = +(num[1] + num[2]);
    if (hundredNumber === 0) {
    return `${readableNum[num[0]]} hundred`;
    } 
  }

  if (num.length === 3) {
    let oneNumber = +(num[1] + num[2]);
    if (oneNumber >= 0 && oneNumber <= 9) {
    return `${readableNum[num[0]]} hundred ${readableNum[oneNumber]}`;
  }
}

if (num.length === 3) {
  let tenthNumberfromtwenty = +(num[1] + num[2]);
  if (((tenthNumberfromtwenty === 20) ||
  (tenthNumberfromtwenty === 30) || 
  (tenthNumberfromtwenty === 40) ||
  (tenthNumberfromtwenty === 50) ||
  (tenthNumberfromtwenty === 60) ||
  (tenthNumberfromtwenty === 70) ||
  (tenthNumberfromtwenty === 80) ||
  (tenthNumberfromtwenty === 90))) {
  return `${readableNum[num[0]]} hundred ${readableNum[tenthNumberfromtwenty]}`;
}
}

  if (num.length === 3) {
    let tenthNumber = +(num[1] + num[2]);
    if (tenthNumber >= 10 && tenthNumber <= 19) {
    return `${readableNum[num[0]]} hundred ${readableNum[tenthNumber]}`;
  }
}



  if (num.length === 3) {
    let numberTwo = (number - (number - (number % 100)) -  (number % 10));
    let numberThree = (number % 10);
   
    return `${readableNum[num[0]]} hundred ${readableNum[numberTwo]} ${readableNum[numberThree]}`;
}

  
  }

