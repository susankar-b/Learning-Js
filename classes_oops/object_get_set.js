const User={
    _email: "hc@mail.com",
    _pass: "hcv",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);
