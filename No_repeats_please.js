function permAlone(str) {

  //Length of the string
  var len = str.length;

  //Split the string into an array
  var sep = str.split('');

  //Deduplicate the new array
  var uniques = sep.reduce(function(acc, curr) {
    if (acc.indexOf(curr) < 0) {
      acc.push(curr);
    }
    return acc;
  }, []);

  //Number of unique values in the array
  var uniqNums = uniques.length;

  //Object noting number of instances of each letter
  var uniqueCounts = {};
  sep.forEach(function(x) {
    uniqueCounts[x] = (uniqueCounts[x] || 0) + 1;
  });

  /*
//Alternative counting method to keep things in arrays. 

//Start an array to store the number of uniques
  var uniqueCount = uniques.map(function(curr) {return [curr, 0];});

//This messes up
    for (var x in uniques) {
    if (uniques.indexOf(sep[x]) >= 0) {
      uniqueCount[uniques.indexOf(sep[x])][1] += 1;
    }
  }  

*/

  //This recursive function performs a factorial on a number
  var factorial = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  var regex = /([a-z])\1+/gm;

  //The total number of permutations in these problems will always be n!/(n-r)!, where r=n because order matters but we never have any "extra" unused letters
  var totalPerms = factorial(len);

  function perm(n, arr) {
    if (n = 1) {
      return arr;
    } else {

      for (var i = 0; i < (n - 1); i += 1) {

        var temp = [];
        var b = arr[n - 1];

        if (n % 2 === 0) {
          var a = arr[i];

          a = temp;
          b = a;
          temp = b;

        } else {
          var o = arr[0];

          o = temp;
          b = o;
          temp = b;
        }
      }
      perm(n - 1, arr);
    }
  }

  return totalPerms;
}

permAlone("aaabb");
