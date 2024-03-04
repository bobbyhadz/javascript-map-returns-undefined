// EXAMPLE 1 - Forgetting to sometimes return from Array.map()

const arr = [1, 2, 3];

const newArr = arr.map(num => {
  if (num > 2) {
    return num + 1;
  }
});

console.log(newArr); // 👉️ [undefined, undefined, 4]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Return a value from the callback function

// const arr = [1, 2, 3];

// const newArr = arr.map(num => {
//   if (num > 2) {
//     return num + 1;
//   }

//   return num;
// });

// console.log(newArr); // 👉️ [1, 2, 4]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Explicitly returning `undefined` values from a function

// const arr = [1, 2, 3];

// const newArr = arr.map(num => {
//   return arr[100];
// });

// console.log(newArr); // 👉️ [undefined, undefined, undefined]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Implicitly returning a value from the `map()` method

// const arr = [1, 2, 3];

// const newArr = arr.map(num => num + 1);

// console.log(newArr); // 👉️ [2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using the `filter()` method instead of `map()`

// const arr = [-5, -3, 1, 9, 14];

// const newArr = arr.filter(element => {
//   return element > 0;
// });

// console.log(newArr); // 👉️ [ 1, 9, 14 ]

// ------------------------------------------------------------------

// // EXAMPLE 6 - Using the `reduce()` method instead of `map()`

// const arr = [-5, -3, 1, 9, 14];

// const newArray = arr.reduce((accumulator, item) => {
//   if (item > 0) {
//     return [...accumulator, item + 100];
//   }

//   return [...accumulator, item];
// }, []);

// // 👇️ [ -5, -3, 101, 109, 114 ]
// console.log(newArray);
