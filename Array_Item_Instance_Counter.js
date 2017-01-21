//Create an object that shows the number of instances of each value in an array

var arr = [0, 'alpha', 1, 7, 'alpha', 'bravo', 1, 'alpha', 1]; //Sample array

var uniqueCounts = {};

arr.forEach(function(x) {
  uniqueCounts[x] = (uniqueCounts[x] || 0) + 1;
});

console.log(uniqueCounts);

//Sample output: Object {0: 1, 1: 3, 7: 1, alpha: 3, bravo: 1}
