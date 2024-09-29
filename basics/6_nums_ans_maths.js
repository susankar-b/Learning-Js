const score=100
//console.log(score);
const target=new Number(200)
//console.log(target);

//console.log(target.toString()); // returns string value
//console.log(target.toString().length); // returns length value

const num=123.1452
//console.log(num.toPrecision(2)); // roundoff 

const rupee=1000000;
//console.log(rupee.toLocaleString('en-IN'));

// *************_______Maths_______********
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // give number between 0 and 1
console.log((Math.random()*10) + 1); // to avoid zer0 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

