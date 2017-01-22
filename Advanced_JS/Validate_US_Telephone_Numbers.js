/*

Validate US Telephone Numbers 
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask (https://github.com/FreeCodeCamp/freecodecamp/wiki/FreeCodeCamp-Get-Help) if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

*/
/*

Note that I opened an issue regarding this challenge at:

https://github.com/freeCodeCamp/freeCodeCamp/issues/8256

*/

function telephoneCheck(str) {
  
  var num = /[\d]/;
  var justDigits = [];
  var bool = true;
  
  //the str array retains all characters from the original str
  str = str.split('');
  
  //push non-string numbers to array justDigits
  for (var x in str) {
    if (str[x].match(num)) {
      justDigits.push(parseFloat(str[x]));
    }
  }

  //test 1 - If justDigits has 10 numbers or 1 + 10 numbers, it'll probably be OK. Otherwise the phone # is invalid.
  if (justDigits.length === 10 || justDigits.length === 11 && justDigits[0] === 1) {} else {
    bool = false;
  }

  //test 2 - str should start with a number or a '('
  if (isNaN(str[0]) === false || (str[0] === '(')) {} else {
    bool = false;
  }

  //test 3 - if a str has a '(', the ')' should be 4 spots later
  if (str.indexOf('(') > -1) {
    if (str.indexOf(')') === str.indexOf('(') + 4) {} else {
      bool = false;
    }
  }

  //test 4 - if a str has a ')', the '(' should be 4 spots before and should exist
  if (str.indexOf(')') > -1) {
    if (str.indexOf('(') === str.indexOf(')') - 4 && str.indexOf('(') > -1) {} else {
      bool = false;
    }
  }
/*
  //test 5 - not required to pass, but a good additional test would check for invalid characters
  var invalid = /[^\d()-\s]/;
  for (var y in str) {
    if (str[y].match(invalid)) {
      bool = false;
    }
  }
*/
  return bool;
}

telephoneCheck("(555)5(55?)-5555"); //Currently passes as true
