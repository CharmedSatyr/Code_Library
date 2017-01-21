function permAlone(str) {

  //Split the string into an array
  var arr = str.split('');

  //Counter for No repeats perms
  var counter = 0;

  //This function swaps the positions of items in an array
  function swap(swapArr, pos1, pos2) {
    var tmp = swapArr[pos1];
    swapArr[pos1] = swapArr[pos2];
    swapArr[pos2] = tmp;
    return swapArr;
  }
  
  //This is a recursive version of Heap's algorithm
  //and takes arr's length and arr as params
  function perm(n, arr) {

    //Regex identifies two identical letters in a row. For some reason it must be
    //inside the perm function
    var regex = /([a-z])\1+/gm;

    if (n === 1 && !regex.test(arr.join(''))) {
      counter++;
      //Erase the regex test and uncommenting the below to log all perms
      //console.log(arr);
      return;
    }

    for (var i = 0; i < n; i++) {
      perm(n - 1, arr);

      if (n % 2 === 0 ? swap(arr, i, n - 1) : swap(arr, 0, n - 1));
      
    } //end for
  }
  
  perm(arr.length, arr);

  return counter;

}

permAlone("ad");
