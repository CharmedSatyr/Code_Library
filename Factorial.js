//Recursively find the factorial of a number

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

factorial(6); //Sample: Find 6!
