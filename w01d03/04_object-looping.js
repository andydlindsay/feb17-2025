// const ourArr = ['a', 'b', 'c'];

// c-style loop
// for (let i = 0; i < ourArr.length; i++) {
//   const value = ourArr[i];
//   console.log(value);
// }

// let i = 0;
// while (i < ourArr.length) {
//   console.log(ourArr[i]);
//   i++;
// }

// const ourArr = ['a', 'b', 'c'];

// for..of loop
// loops through the values
// for (const char of ourArr) {
//   console.log(char);
// }

// for..in loop
// loops through the indexes (indices)
// for (const index in ourArr) {
//   const value = ourArr[index];
//   console.log(value);
// }


//          c-style   for..of    for..in
// arrays      Y         Y          Y
// objects     N         N          Y

const myObj = {
  firstName: 'alice',
  lastName: 'wonderland',
  age: 42,
  myPet: 'frankie the dog',
};

for (const key in myObj) {
  console.log('key', key);
  // const value = myObj.key;
  const value = myObj[key];
  console.log('value', value);
}
