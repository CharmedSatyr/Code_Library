//Deduplicate items in an array

var arr = ['ant', 0, 'aunt', 'ant']; //Sample array

var uniques = arr.reduce(function(acc, curr) {
  if (acc.indexOf(curr) < 0) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniques);
