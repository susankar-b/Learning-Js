 console.log("2" > 1);
 console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
the reason is that an equality check (==) and comparisons <,>,>=,<=
works differently.
Comparisons convert null to a number,treating it as 0.
That's why null>=0 is true and null>0 is false.
*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  , strict comparison doesnot convert the type of data

console.log("2" === 2);