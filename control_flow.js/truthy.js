// falsy vlues
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ",[], {}, function(){}

const user=[]
if(user.length===0){
    console.log("Array is empty");
    
}

const obj={}
if(Object.keys(obj).length===0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator(??): null,undefined

let val;
//val=5??10
//val=null ?? 10
//val=undefined ?? 10
//val=null ?? 10 ?? 19
//console.log(val);

// Ternary Operator
//condition ? true ? false

const icetea=100
icetea<=80 ? console.log("less than 80"): console.log("more than 80");
;

