// // variables

// // using var to defining a variable
// var name = "John";
// console.log("using var to print", name);
// // using let to define a variable
// let name2 = "John";
// console.log("using let to print", name2);
// // using const to define a variable
// const name3 = "John";
// console.log("using const to print", name3);


// // let is block scoped
// // const is block scoped
// // var is function scoped
// {
//   var name4 = "John";
// }
// console.log("able to access name4 outside its scope", name4);
// {
//   let name5 = "John";
// }
// // console.log("Failing to access name5 outside its scope", name5);
// {
//     const name6 = "John";
// }
// // console.log("Failing to access name6 outside its scope", name6);


// // reassigning a variable
// name = "Jane";
// console.log("reassigning a variable", name);
// name2 = "Jane";
// console.log("reassigning a variable", name2);
// // reassigning a constant
// // name3 = "Jane";
// // console.log("reassigning a constant", name3);


// // types of variables
// // primitive types
// // string
// // number
// // boolean
// // null
// // undefined
// // symbol
// let undefinedVariable;
// console.log("undefinedVariable", undefinedVariable);
// let nullVariable = null;
// console.log("nullVariable", nullVariable);
// let stringVariable = "John";
// console.log("stringVariable", typeof stringVariable);
// let numberVariable = 1;
// console.log("numberVariable", typeof numberVariable);
// let booleanVariable = true;
// console.log("booleanVariable", typeof booleanVariable);
// let symbolVariable = Symbol("🤣");
// console.log("symbolVariable", typeof symbolVariable);


// // object
// let objectVariable = { name: "John" };
// console.log("objectVariable", typeof objectVariable);
// // array
// let arrayVariable = [1, 2, 3];
// console.log("arrayVariable", typeof arrayVariable);
// // date
// let dateVariable = new Date();
// console.log("dateVariable", typeof dateVariable);
// // regex
// let regexVariable = /\w+/;
// console.log("regexVariable", typeof regexVariable);

// // function
// let functionVariable = function () { };
// console.log("functionVariable", typeof functionVariable);