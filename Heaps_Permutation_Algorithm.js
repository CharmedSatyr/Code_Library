var arr = ['a', 'b', 'c'];

//This function swaps the positions of items in an array
function swap(swapArr, pos1, pos2) {
  var tmp = swapArr[pos1];
  swapArr[pos1] = swapArr[pos2];
  swapArr[pos2] = tmp;
  return swapArr;
}

//This is a recursive JS version of Heap's algorithm, where n should be the array's length
function perm(n, arr) {
  if (n === 1) {
    console.log(arr);
    return;
  }

  for (var i = 0; i < n; i++) {
    perm(n - 1, arr);

    if (n % 2 === 0 ? swap(arr, i, n - 1) : swap(arr, 0, n - 1));
  }
}

perm(arr.length, arr);
