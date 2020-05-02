/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 *
 **/

function rot13(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  str = str.toLowerCase();
  //console.log(str);

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);

    // pass on any non-alphabetic character
    if (
      str[i] == " " ||
      str[i].match(/^[-&\/\\#,+()$~%.'":*\!\?\<>_{}0-9]+$/i)
    ) {
      //console.log(str[i]);
      str2 = str2 + str[i];
    } else {
      const normalIndex = alphabet.indexOf(str[i]);
      let index;
      if (normalIndex + 13 > alphabet.length) {
        index = 13 - (alphabet.length - normalIndex);
      } else if (normalIndex + 13 == alphabet.length) {
        index = 0;
      } else {
        index = normalIndex + 13;
      }

      //console.log(alphabet[index]);
      str2 = str2 + alphabet[index];
    }
  }

  console.log(str2);
  str = str2.toUpperCase();
  return str;
}

/**
 * Test Cases
 **/
rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("SERR YBIR?"); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
