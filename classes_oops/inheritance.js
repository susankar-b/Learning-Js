class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is addd by ${this.username}`);
        
    }
}


const chai=new Teacher("chai","chai@teacher.com","123")
chai.logme()

const icetea=new User("iceTea")
icetea.logme()
chai.addCourse()
console.log(chai);

console.log(chai === User);
console.log(chai === Teacher);
console.log(chai instanceof User);
