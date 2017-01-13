/*
No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

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

  //The total number of permutations in these problems will always be n!/(n-r)!, where r=n because order matters but we never have any "extra" unused letters
  var totalPerms = factorial(len);

  return totalPerms;
}

permAlone("aabb");
