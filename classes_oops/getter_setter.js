class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}acd`
    }
    set password(value){
        this._password=value
    }
}
const massimo=new User("m@gmail.com","123")
console.log(massimo.password);
console.log(massimo.email);

