var c=100
let a=200
if(true){
    let a=10
    const b=20
    // var c=30 // dont use var it takes the value of inner block also
    //console.log("Inner bloack :",a);
    
}
// console.log("Outer block :",a);
//console.log(b);
// console.log(c);


// nested blocks

function one(){
    const name="massimo"
    function two(){
        const film="365 days"
        console.log(name);
        
    }
    // console.log(film);
    two()
}
one()

if(true){
    const name="susankar"
    if(name === "susankar"){
        const last="bhowmik"
        console.log(name+last);
        
    }
    //console.log(last);
    
}
// console.log(name);


console.log(addone(4));
function addone(num){
    return num+1
}

console.log(addtwo(6));
const addtwo=function(num){
    return num+2
}


