const studentName = 'alice';
const studentCohort = 'feb 17 2025';
const studentHasGraduated = false;

const studentOneArr = ['alice', 'feb 17 2025', false];

const studentOneObj = {
  firstName: 'alice',
  cohort: 'feb 17 2025',
  hasGraduated: false,
};

// objects describe a thing
// arrays are collections of things

const user = {
  address: {
    streetNumber: '1234',
    postalCode: 'h0h0h0',
  }
};

// square bracket syntax
user['address']['streetNumber']

// dot notation
user.address.streetNumber

const key = 'address';
console.log(user.key); // undefined
console.log(user[key]);

// objects => collections of key/value pairs

// const arr = ['a', 'b', 'c']; // array literal
// const obj = {
//   'age': 42,
//   lastName: 'ellis'
// }; // object literal

// console.log(obj);

// arr[0] = 1;
// obj['firstName'] = 'carol';

// console.log(obj);

// obj['firstName'] = 'dean';

// console.log(obj);