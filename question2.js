function isInFibonacciSequence(number) {
  if (number < 0 || isNaN(number)) {
    return "Invalid number";
  } else {
    let before = 0;
    let after = 1;
    while (after < n) {
      let temp = before;
      before = after;
      after = temp + after;
    }
    return after === number;
  }
}
