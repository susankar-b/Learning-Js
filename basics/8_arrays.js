// declarations
const arr = [1, 2, 3, 4, 5, 6]
const places = ["uk", "up", "pune"]
const arr2 = new Array(1, 2, 3, 4)

// console.log(arr2[0]);

// Array methods

// arr.push(6) // add at last
// arr.push(7)
// arr.pop()  // remove from last

// arr.unshift(9) // add at first
// arr.shift()   // remove from first
//console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

 const newArr = arr.join()

//  console.log(arr);
//  console.log( newArr); // return a string
//  console.log(typeof newArr);

 // slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3) //  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
console.log(myn1);

console.log("B ", arr);
const myn2 = arr.splice(1, 3) // changes the contents of an array by removing or replacing existing elements and/or adding new elements

console.log("C ", arr);
console.log(myn2);
 
