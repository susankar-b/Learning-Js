// singleton
// Object.create

// object literals

const mysym=Symbol("key1")
const user={
    name:"ssnkr",
    "full name":"susankar",
    [mysym]:"mykey1",
    age: 22,
    location:"agartala",
    isStudent:true
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mysym]);

user.name="massimo" // change name
//Object.freeze(user) // can't change details after that
user.name="selmon" // no change
//console.log(user);

user.greeting=function(){
    console.log("Hello Js user");
    
}
user.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());


