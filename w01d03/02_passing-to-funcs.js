// primitives are passed by value to functions (the function gets a copy)
// const changeMyNum = function(num) {
//   num = 10;
//   console.log('inside the function', num); // 10
// };

// let myNum = 42;

// changeMyNum(myNum);

// console.log('bottom of file', myNum); // 42 or 10 ???

// objects are passed by reference to a function
const changeMyObj = function(obj) {
  obj.age = 100;
  console.log('inside the function', obj.age); // 100
};

const myObj = {
  age: 42,
};

changeMyObj(myObj);

console.log('bottom of the file', myObj.age); // 100
