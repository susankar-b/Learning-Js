const user={
    name:"ssnkr",
    age:22,
    welcomemessage:function(){
        console.log(`${this.name},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomemessage()
// user.name="samy"
// user.welcomemessage()
// console.log(this);

// function chai(){
//     let name="massiomo"
//     console.log(this.name);
    
// }
// chai()

// const chai=function(){
//     let name="massiomo"
//      console.log(this.name);
// }
// chai()


const chai=() => {
    let name="massiomo"
     console.log(this);
}
//chai()

// Arrow function
// explicit return
const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(3,4));

// Implicit return 
const addtwo=(n1,n2)=>(n1+n2)
console.log(addtwo(3,4));

const objreturn=(n1,n2)=>({username:"masimo"})
console.log(objreturn(3,5));

