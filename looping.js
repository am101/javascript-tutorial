// // Looping through an array
// let array = ["a", "b", "c", "d", "e"];

// // using for loop
// for (let i = 0; i < array.length; i++) {
//   console.log("using for loop", array[i]);
// }

// // using for of
// for (let element of array) {
//   console.log("using for of", element);
// }

// // using for in
// for (let element in array) {
//   console.log("using for in", element);
// }

// // while loop
// let i = 0;
// while (i < array.length) {
//   console.log("using while loop", array[i]);
//   i++;
// }

// // do while loop
// let j = 0;
// do {
//   console.log("using do while loop", array[j]);
//   j++;
// } while (j < array.length);

// // using break
// for (let k = 0; k < array.length; k++) {
//   if (array[k] === "c") {
//     break;
//   }
//   console.log("using break", array[k]);
// }

// // using continue
// for (let l = 0; l < array.length; l++) {
//   if (array[l] === "c") {
//     continue;
//   }
//   console.log("using continue", array[l]);
// }


// // using the higher level es6 looping

// // using forEach
// array.forEach(function (element) {
//   console.log("using forEach", element);
// });

// // using map
// let result = array.map(function (element) {
//   return element + "!";
// });
// console.log("using map", result);

// // using filter
// let result2 = array.filter(function (element) {
//   return element === "c";
// });
// console.log("using filter", result2);

// // using reduce
// let result3 = array.reduce(function (accumulator, element) {
//   return accumulator + element;
// });
// console.log("using reduce", result3);

// // using some
// let result4 = array.some(function (element) {
//   return element === "c";
// });
// console.log("using some", result4);

// // using every
// let result5 = array.every(function (element) {
//   return element === "c";
// });
// console.log("using every", result5);

// // using find
// let result6 = array.find(function (element) {
//   return element === "c";
// });
// console.log("using find", result6);

// // using findIndex
// let result7 = array.findIndex(function (element) {
//   return element === "c";
// });
// console.log("using findIndex", result7);
