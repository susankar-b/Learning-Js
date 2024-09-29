// let myName="massimo    "
// console.log(myName.trueLength);


let myheros=["thor","ironman"]

let heropower={
    thor: "hammer",
    ironman: "jarvis",

    getThorpower: function(){
        console.log(`Thor power is ${this.thor}`);
        
    }
}
Object.prototype.ssnkr=function(){
    console.log(`ssnkr is present in all objects`);
    
}

Array.prototype.heyssnkr=function(){
    console.log(`ssnkr says hello`);
    
}

// heropower.ssnkr()
// myheros.ssnkr()
// myheros.heyssnkr()
// heropower.heyssnkr()

const user={
    name: "chai",
    email: "chai@google.com"
}
const Teacher={
    makeVide:true
}
const Teachingsupport={
    isAvaulable: false
}
const TAsupport={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:Teachingsupport
}
Teacher.__proto__=user 

// modern syntax
Object.setPrototypeOf(Teachingsupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()