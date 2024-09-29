
// for of

const arr=[1,2,34,5]
for (const num of arr){
    //console.log(num);
    
}

const greetings="Hello world"
for(const greet of greetings){
    
    if(greet==" ")
        continue
   // console.log(`Char is ${greet}`);
    
}

// maps

const map=new Map()
map.set("IN","India")
map.set("CN","China")
map.set("FR","France")

for (const [key,value] of map) {
    //console.log(key ,":" ,value);
    
}


// for in

const myobj={
    js:"javascript",
    nd:"node",
    py:"python",
    rb:"ruby"
}
for(const key in myobj){
   // console.log(`${key} : ${myobj[key]}`);
    
}

const arr2=["ac","bc","cd","de"]
for (const key in arr2) {
    //console.log(arr2[key]);
    
}


// for each

const lang=["java","python","ruby"]
lang.forEach((i) => {
   // console.log(i);
    
});

lang.forEach(function(val){
    //console.log(val);
    
})

function print(item){
   // console.log(item);
    
}
lang.forEach(print)

lang.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})

const mylang=[
    {
        lang:"java",
        extension:"java"
    },
    {
        lang:"python",
        extension:"py"
    },
    {
        lang:"javascript",
        extension:"js"
    }
]

mylang.forEach(element => {
    console.log(element.extension);
    
});