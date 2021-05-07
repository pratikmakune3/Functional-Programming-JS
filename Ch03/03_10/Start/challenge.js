const map = (arr, func) => {
  let newArray = [];
  arr.forEach((element) => {
    const result = func(element);
    newArray.push(result);
  });

  return newArray;
};

const map = (arr, func) => {
  return arr.reduce((acc, elem) => {
    const result = func(elem);
    acc.push(result);
    return acc;
  }, []);
};

// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(["a", "b", "c", "d"], (x) => x.toUpperCase()));
