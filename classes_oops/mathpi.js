const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

const chai={
    name: 'lemon tea',
    price:230,
    isAvailable:true,

    orderchai: function(){
        console.log("Order Taken");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}