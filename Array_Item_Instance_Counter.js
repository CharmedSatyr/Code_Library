//Create an object that shows the number of instances of each value in an array

//Sample array
var arr = [0, 'alpha', 1, 7, 'alpha', 'bravo', 1, 'alpha', 1];



//Version #1: Done with forEach
var uniqueCounts = {};

arr.forEach(function(x) {
  uniqueCounts[x] = (uniqueCounts[x] || 0) + 1;
//ALTERNATE: uniqueCounts[x] ? uniqueCounts[x] = uniqueCounts[x] + 1 : uniqueCounts[x] = 1;
});

console.log(uniqueCounts);



//Version #2: Done with reduce
arr.reduce(function(acc, curr) {
  acc[curr] = (acc[curr] || 0) + 1;
//ALTERNATE: acc[curr] ? acc[curr] = acc[curr] + 1 : acc[curr] = 1;
  return acc;
}, {});



/*
Sample output
Object {0: 1, 1: 3, 7: 1, alpha: 3, bravo: 1}
*/
