/**
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 * The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 *     555-555-5555
 *     (555)555-5555
 *     (555) 555-5555
 *     555 555 5555
 *     5555555555
 *     1 555 555 5555
 *
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
 * Your job is to validate or reject the US phone number based on any combination of the formats provided above.
 *
 * The area code is required.
 * If the country code is provided, you must confirm that the country code is 1.
 *
 * Return true if the string is a valid US phone number; otherwise return false.
 **/

function phoneNumberValidator(phone) {
  //console.log(phone);

  // check for characters and special characters
  if (/[A-Za-z&\/\\#,+$~^%.'":*\!\?\<>_{}]+/.test(phone)) {
    console.log("not valid - letters or special chars\n");
    return false;
  }

  // check for the national code
  if (phone[1] == " ") {
    if (phone[0] != "1") {
      console.log("not valid - national code invalid\n");
      return false;
    }
    phone = phone.slice(2);
  } else if (phone[1] == "(") {
    if (phone[0] != "1") {
      console.log("not valid - national code invalid\n");
      return false;
    }
    phone = phone.slice(1);
  }

  // make sure the phone number has the minimum length possible
  if (phone.length < 10) {
    console.log("not valid - too small\n");
    return false;
  }

  // check for parentheses
  if (phone[0] == "(") {
    if (phone[4] != ")") {
      console.log("not valid - not closing parentheses\n");
      return false;
    }

    // check if the 3 following chars are numbers
    if (!/[0-9]{3}/.test(phone.slice(1, 4))) {
      console.log("not valid - regional code with less than 3 numbers\n");
      return false;
    }

    phone = phone.slice(5);
  } else {
    // check if the 3 following chars are numbers
    if (!/[0-9]{3}/.test(phone.slice(0, 3))) {
      console.log("not valid - regional code with less than 3 numbers\n");
      return false;
    }

    phone = phone.slice(3);
  }

  // check if the next char is a space, an hyphen or a number
  if (phone[0] == " " || phone[0] == "-") {
    phone = phone.slice(1);
  } else if (!/[0-9]+/.test(phone[0])) {
    console.log("not valid - unexpected char\n");
    return false;
  }

  // check if the 3 following chars are numbers
  if (!/[0-9]{3}/.test(phone.slice(0, 3))) {
    console.log("not valid - first part with less than 3 numbers\n");
    return false;
  }
  phone = phone.slice(3);

  // check if the next char is a space, an hyphen or a number
  if (phone[0] == " " || phone[0] == "-") {
    phone = phone.slice(1);
  } else if (!/[0-9]+/.test(phone[0])) {
    console.log("not valid - unexpected char\n");
    return false;
  }

  // check if the 4 following chars are numbers
  if (!/[0-9]{4}/.test(phone.slice(0, 4))) {
    console.log("not valid - second part with less than 4 numbers\n");
    return false;
  }
  phone = phone.slice(4);

  // check if there is something left
  if (phone.length > 0) {
    console.log("not valid - too many numbers");
    return false;
  }

  return true;
}

phoneNumberValidator("555-555-5555"); // should return true.
phoneNumberValidator("1 555-555-5555"); // should return true.
phoneNumberValidator("1 (555) 555-5555"); // should return true.
phoneNumberValidator("5555555555"); // should return true.
phoneNumberValidator("555-555-5555"); // should return true.
phoneNumberValidator("(555)555-5555"); // should return true.
phoneNumberValidator("1(555)555-5555"); // should return true.
phoneNumberValidator("555-5555"); // should return false.
phoneNumberValidator("5555555"); // should return false.
phoneNumberValidator("1 555)555-5555"); // should return false.
phoneNumberValidator("1 555 555 5555"); // should return true.
phoneNumberValidator("1 456 789 4444"); // should return true.
phoneNumberValidator("123**&!!asdf#"); // should return false.
phoneNumberValidator("55555555"); // should return false.
phoneNumberValidator("(6054756961)"); // should return false
phoneNumberValidator("2 (757) 622-7382"); // should return false.
phoneNumberValidator("0 (757) 622-7382"); // should return false.
phoneNumberValidator("-1 (757) 622-7382"); // should return false
phoneNumberValidator("2 757 622-7382"); // should return false.
phoneNumberValidator("10 (757) 622-7382"); // should return false.
phoneNumberValidator("27576227382"); // should return false.
phoneNumberValidator("(275)76227382"); // should return false.
phoneNumberValidator("2(757)6227382"); // should return false.
phoneNumberValidator("2(757)622-7382"); // should return false.
phoneNumberValidator("555)-555-5555"); // should return false.
phoneNumberValidator("(555-555-5555"); // should return false.
phoneNumberValidator("(555)5(55?)-5555"); // should return false.
