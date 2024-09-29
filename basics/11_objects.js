// const user=new Object() // singleton 
const user={} // non-singleton
user.id="abc12"
user.name="ssnkr"
user.isloggedin=false
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.hasOwnProperty("isloggedin"));



const newuser={
    email:"ssnkr@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"susankar",
            lastname:"bhowmik"
        }
    }
}
// console.log(newuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} // spread operator
// console.log(obj3);

const users2 = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

// console.log(users2[2].id);


// object de-structure
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const{courseInstructor:instructor}=course
console.log(instructor);


