function isInFibonacciSequence(n) {
  let before = 0;
  let after = 1;
  while (after < n) {
    let temp = before;
    before = after;
    after = temp + after;
  }
  return after === n;
}
