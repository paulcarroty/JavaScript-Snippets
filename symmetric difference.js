// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-symmetric-difference/16086

function sym() {
  // difference between set A and set B
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
    // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  // convert the set to array by using spread operator again
  return [...result];
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);
