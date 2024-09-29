const name="susankar"
const age=22
console.log(`Hello my name is ${name} and im ${age} year old`);

const music=new String("pink-flyod-band")
// console.log(music[0]);
// console.log(music.__proto__);

// console.log(music.length);
// console.log(music.toUpperCase());

// console.log(music.charAt(2));
// console.log(music.indexOf('k'));

const newstr=music.substring(0,4)
//console.log(newstr);
 
const anotherstr=music.slice(-10,14);
//console.log(anotherstr);

const user="   human   "
// console.log(user);
// console.log(user.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(music.split('-'));