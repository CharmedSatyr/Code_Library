/*

Symmetric Difference 

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask (https://github.com/FreeCodeCamp/freecodecamp/wiki/FreeCodeCamp-Get-Help) if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Symmetric Difference (https://www.youtube.com/watch?v=PxffSUQRkG4)

*/

function sym(args) {

  var all = [];
  var kill = [];
  var working = [];
  
  //Push all of the arguments into an array
  for (var h = 0; h < arguments.length; h++) {
    all.push(arguments[h]);
  }
  
  
  //This function checks to see if a val is the same as any in all[1] and pushes it to var kill if so.
  function killer(val) {
    for (var i = 0; i < all[1].length; i++) {
    if (val === all[1][i]) {
      kill.push(val);
    }
   }   
  }   
  
  //See the seekAndDestroy challenge for this. If used with filter it will filter an array for whatever's in var kill
  function seekAndDestroy(val) {
    for (var k = 0; k < kill.length; k++) {
      if (val === kill[k]) {
        return false;
      }
    }
    return true;
  }

  //Do this until there's only one array left
  while (all.length > 1) {
  all[0].map(killer); //Check the 0 index of var all and push any matches with the next index to kill  
  working = all[0].concat(all[1]).filter(seekAndDestroy); //Join the first two arrays and then filter them for kill values
  all.splice(0, 1, working); //Replace the first item in var all with var working
  all.splice(1, 1); //Eliminate the array we already filtered for.
  kill = []; //all[0] is now the symmetric difference of the original first two arrays in var all. Now we'll repeat the process with the new all[0] we've created and the new all[1]. Reset kill so it doesn't keep filtering for old values
    
  }

  return all[0].filter(function (el, i, arr) {
	return arr.indexOf(el) === i; //remove any duplicates in the final array, and we're done.
});

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
