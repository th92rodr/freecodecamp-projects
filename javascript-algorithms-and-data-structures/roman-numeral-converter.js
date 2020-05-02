/**
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 *
 **/

const DIGIT_1 = 3;
const DIGIT_2 = 2;
const DIGIT_3 = 1;
const DIGIT_4 = 0;

function convertToRoman(num) {
  const firstDigit = (num / 1) % 10;
  const secondDigit = Math.floor((num / 10) % 10);
  const thirdDigit = Math.floor((num / 100) % 10);
  const fourthDigit = Math.floor((num / 1000) % 10);

  const list = [fourthDigit, thirdDigit, secondDigit, firstDigit];
  let finalResult = "";

  for (let i = 0; i < list.length; i++) {
    let number = list[i];

    if (number > 0 && number < 4) {
      let res;
      if (i == DIGIT_1) res = "I";
      else if (i == DIGIT_2) res = "X";
      else if (i == DIGIT_3) res = "C";
      else if (i == DIGIT_4) res = "M";

      for (let j = 0; j < number; j++) {
        finalResult = finalResult + res;
        //finalResult = finalResult.concat(res);
      }
    } else if (number == 4) {
      if (i == DIGIT_1) finalResult = finalResult + "IV";
      else if (i == DIGIT_2) finalResult = finalResult + "XL";
      else if (i == DIGIT_3) finalResult = finalResult + "CD";
    } else if (number > 4 && number < 9) {
      let aux, res, res1;

      if (number == 5) aux = 0;
      else if (number == 6) aux = 1;
      else if (number == 7) aux = 2;
      else if (number == 8) aux = 3;

      if (i == DIGIT_1) {
        res = "V";
        res1 = "I";
      } else if (i == DIGIT_2) {
        res = "L";
        res1 = "X";
      } else if (i == DIGIT_3) {
        res = "D";
        res1 = "C";
      }

      finalResult = finalResult + res;
      for (let j = 0; j < aux; j++) {
        finalResult = finalResult + res1;
      }
    } else if (number == 9) {
      if (i == DIGIT_1) finalResult = finalResult + "IX";
      else if (i == DIGIT_2) finalResult = finalResult + "XC";
      else if (i == DIGIT_3) finalResult = finalResult + "CM";
    }
  }
  console.log(finalResult);
  return finalResult;
}

/**
 * Test Cases
 **/
convertToRoman(2); // should return "II".
convertToRoman(3); // should return "III".
convertToRoman(4); // should return "IV".
convertToRoman(5); // should return "V".
convertToRoman(9); // should return "IX".
convertToRoman(12); // should return "XII".
convertToRoman(16); // should return "XVI".
convertToRoman(29); // should return "XXIX".
convertToRoman(44); // should return "XLIV".
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "LXXXIII"
convertToRoman(97); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(400); // should return "CD"
convertToRoman(500); // should return "D"
convertToRoman(501); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); // should return "MMMCMXCIX"
