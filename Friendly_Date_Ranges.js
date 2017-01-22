/*
Friendly Date Ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.split() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

String.prototype.substr() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

parseInt() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*/

function makeFriendlyDates(arr) {

  var months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  var days = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    21: '21st',
    22: '22nd',
    23: '23rd',
    31: '31st'
  };

  //Combine the strings and split them into an array of numbers
  var numArr = [];
  arr.join('-').split('-').map(function(curr) {
    numArr.push(parseInt(curr));
  });

  //Reorder arrays
  //This function swaps the positions of items in an array
  function swap(swapArr, pos1, pos2) {
    var tmp = swapArr[pos1];
    swapArr[pos1] = swapArr[pos2];
    swapArr[pos2] = tmp;
    return swapArr;
  }

  swap(numArr, 0, 2);
  swap(numArr, 0, 1);
  swap(numArr, 5, 3);
  swap(numArr, 3, 4);

  //Use the month names instead of numbers
  numArr.splice(0, 1, months[numArr[0]]);
  numArr.splice(3, 1, months[numArr[3]]);

  //Separate the first and second dates into their own arrays
  var a = [numArr[0], numArr[1], numArr[2]];
  var b = [numArr[3], numArr[4], numArr[5]];

  //Join together in pretty format for use with Date.parse and at the end
  function pretty(arr) {
    var result;
    if (arr.length === 1) {
      result = arr.toString();
    } else if (arr.length === 2) {
      result = arr[0] + ' ' + arr[1];
    } else {
      result = arr[0] + ' ' + arr[1] + ', ' + arr[2].toString();
    }
    return result;
  }

  a = pretty(a);
  b = pretty(b);

  //Use this format to create placeholders 
  //If the date range ends in less than a year from when it begins, do not display the ending year.  
  if (Math.abs(Date.parse(b) - Date.parse(a)) <= 31449600000) {
    numArr.splice(5, 1, 0);
  }

  //If the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
  if (numArr[2] === 2016 && Math.abs(Date.parse(a) - Date.parse("July 22, 2016")) <= 31449600000 && Math.abs(Date.parse(b) - Date.parse("July 22, 2016") <= 31449600000)) {
    numArr.splice(2, 1, 0);
  }

  //Use ordinal dates instead of cardinal
  if (!days[numArr[1]]) {
    numArr.splice(1, 1, numArr[1] + 'th');
  } else {
    numArr.splice(1, 1, days[numArr[1]]);
  }

  if (!days[numArr[4]]) {
    numArr.splice(4, 1, numArr[4] + 'th');
  } else {
    numArr.splice(4, 1, days[numArr[4]]);
  }

  //If the range ends in the same month that it begins, do not display the ending year or month.
  if (numArr[0] == numArr[3] && numArr[2] === numArr[5]) {
    numArr.splice(3, 1, 0);
  }

  //Filter out placeholders
  a = [numArr[0], numArr[1], numArr[2]];
  b = [numArr[3], numArr[4], numArr[5]];

  a = a.filter(function(curr) {
    if (curr !== 0) {
      return curr;
    }
  });
  b = b.filter(function(curr) {
    if (curr !== 0) {
      return curr;
    }
  });

  //Don't print the same date twice.
  var final = [];

  if (arr[0] !== arr[1]) {
    final.push(pretty(a), pretty(b));
  } else {
    final.push(pretty(a));
  }
  return final;
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]); //should return ["January 13th, 2018"]
