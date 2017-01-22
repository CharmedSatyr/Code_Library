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

  //Convert months to language
  numArr.splice(1, 1, months[numArr[1]]);
  numArr.splice(4, 1, months[numArr[4]]);

  //Convert days to language
  if (!days[numArr[2]]) {
    numArr.splice(2, 1, numArr[2] + 'th');
  } else {
    numArr.splice(2, 1, days[numArr[2]]);
  }

  if (!days[numArr[5]]) {
    numArr.splice(5, 1, numArr[5] + 'th');
  } else {
    numArr.splice(5, 1, days[numArr[5]]);
  }

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

  //Create placeholder for duplicate months
  if (numArr[0] == numArr[3]) {
    numArr.splice(3, 1, 0);
  }
  
  //Create placeholder for dates within a year of each other
  if (numArr[5] - numArr[2] <= 1 && numArr[2] !== 2017) {
    numArr.splice(2, 1, 0);
    numArr.splice(5, 1, 0);
  } else if (numArr[5] - numArr[2] <=1) {
    numArr.splice(5, 1, 0);
  }  
  
  //Separate the first and second dates into their own arrays
  var a = [numArr[0], numArr[1], numArr[2]];
  var b = [numArr[3], numArr[4], numArr[5]];
  
  //Clean out placeholders
  a = a.filter(function(curr) {if (curr !== 0) {return curr;}});
  b = b.filter(function(curr) {if (curr !== 0) {return curr;}});

/*  //Clean out total repeats
  if (b.length === 1 && b == a[1]) {
    b = 0;
  }
  */
  //Join together in pretty format
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

  return [a,b];
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);
