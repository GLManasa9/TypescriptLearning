class User {
    public email:string
    private name:string
    city:string="hyd"
    private readonly hometown:string="bhimavaram"
    constructor(email:string,name:string){
        this.email = email
        this.name = name
    }
}

//easy way to do this in ts
class NewUser {
    constructor(
        public email:string,
        public name:string
    ){}

    get getEmail():string{
        return this.email
    }

    set setEmail(email:string){
        this.email = email
    }
}

class SubUser extends NewUser{
    isFamily:boolean=true
    changeEmail(email:string){
        this.email=email
    }
}
const Hitest = new User("h@h.com","mansa")
Hitest.city="bang"
console.log(Hitest.city)
const ram = new NewUser("H@r.com","ram")