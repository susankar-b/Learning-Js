"use strict"; // treat all JS code as newer version
//alert() // used in browser
let name="ssnkr"
let age=22 
let isStudent=true
let state;

// symbol=>unique

console.log(typeof age) // range of nummber is 2^53
console.log(typeof name)
console.log(typeof isStudent)
console.log(typeof state)
console.log(typeof null) // null is standalone value
console.log(typeof undefined)

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// **********************************************

// stack(primitive) heap(non-primitive)
let myname="ssnkr"
let anothername=myname // copy of my name,stack
anothername="massimo"

console.log(myname);
console.log(anothername);

let userone={
    email:"ssnkr@yahoo.com",
    serial:1
}
let usertwo=userone // reference of userone,heap
console.log(usertwo.email);
console.log(userone.email);

