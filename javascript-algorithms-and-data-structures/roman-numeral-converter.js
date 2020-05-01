/**
 * Convert the given number into a roman numeral.
 * 
 * All roman numerals answers should be provided in upper-case.
 * 
 **/
const DIGIT_1 = 3
const DIGIT_2 = 2
const DIGIT_3 = 1
const DIGIT_4 = 0

function convertToRoman(num) {
    var first_digit = (num / 1) % 10;
    var second_digit = Math.floor((num / 10) % 10);
    var third_digit = Math.floor((num / 100) % 10);
    var fourth_digit = Math.floor((num / 1000) % 10);

    var list = [fourth_digit, third_digit, second_digit, first_digit];
    var final_result = '';

    for (var i = 0; i < list.length; i++) {
        var number = list[i];
        
        if (number > 0 && number < 4) {
            var res;
            if (i == DIGIT_1) res = 'I';
            else if (i == DIGIT_2) res = 'X';
            else if (i == DIGIT_3) res = 'C';
            else if (i == DIGIT_4) res = 'M';
            
            for (var j = 0; j < number; j++) {
                final_result = final_result + res;
                //final_result = final_result.concat(res);
            }
        }
        else if (number == 4) {
            if (i == DIGIT_1) final_result = final_result + 'IV';
            else if (i == DIGIT_2) final_result = final_result + 'XL';
            else if (i == DIGIT_3) final_result = final_result + 'CD';
        }
        else if (number > 4 && number < 9) {
            var aux, res, res1;

            if (number == 5) aux = 0
            else if (number == 6) aux = 1
            else if (number == 7) aux = 2
            else if (number == 8) aux = 3

            if (i == DIGIT_1) {
                res = 'V';
                res1 = 'I';
            } else if (i == DIGIT_2) {
                res = 'L';
                res1 = 'X';
            } else if (i == DIGIT_3) {
                res = 'D';
                res1 = 'C';
            }

            final_result = final_result + res;
            for (var j = 0; j < aux; j++) {
                final_result = final_result + res1;
            }            
        }
        else if (number == 9) {
            if (i == DIGIT_1) final_result = final_result + 'IX';
            else if (i == DIGIT_2) final_result = final_result + 'XC';
            else if (i == DIGIT_3) final_result = final_result + 'CM';
        }
    }
    console.log(final_result);
    return final_result
}
/**
 * Test Cases
 **/
convertToRoman(2) // should return "II".
convertToRoman(3) // should return "III".
convertToRoman(4) // should return "IV".
convertToRoman(5) // should return "V".
convertToRoman(9) // should return "IX".
convertToRoman(12) // should return "XII".
convertToRoman(16) // should return "XVI".
convertToRoman(29) // should return "XXIX".
convertToRoman(44) // should return "XLIV".
convertToRoman(45) // should return "XLV"
convertToRoman(68) // should return "LXVIII"
convertToRoman(83) // should return "LXXXIII"
convertToRoman(97) // should return "XCVII"
convertToRoman(99) // should return "XCIX"
convertToRoman(400) // should return "CD"
convertToRoman(500) // should return "D"
convertToRoman(501) // should return "DI"
convertToRoman(649) // should return "DCXLIX"
convertToRoman(798) // should return "DCCXCVIII"
convertToRoman(891) // should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) // should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) // should return "MMMCMXCIX"
