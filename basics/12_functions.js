function add(a,b){
    console.log(a+b);
    
}
//add(2,9)

function sum(a,b){
    // let ans=a+b
    // return ans
    return a+b
    
}
const ans=sum(3,4)
//console.log("ans : ",ans);

function loginMessage(username="sam"){
    if(!username){
        console.log("enter user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginMessage("massimo"));
//console.log(loginMessage());

function calculateCartprice(val1,vl2,...num){
    return num
}
//console.log(calculateCartprice(12,4,588,2));

const user={
    name:"massimo",
    age:22
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
    
}
//handleObject(user)
handleObject({
    name:"sam",
    age:23
})

const myarr=[122,45,78,90]
function returnvalue(getvalue){
    return getvalue[1]
}
//console.log(returnvalue(myarr));
console.log(returnvalue([200,400,402]));



