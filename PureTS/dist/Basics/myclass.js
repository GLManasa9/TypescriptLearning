"use strict";
class User {
    constructor(email, name) {
        this.city = "hyd";
        this.hometown = "bhimavaram";
        this.email = email;
        this.name = name;
    }
}
//easy way to do this in ts
class NewUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
}
class SubUser extends NewUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeEmail(email) {
        this.email = email;
    }
}
const Hitest = new User("h@h.com", "mansa");
Hitest.city = "bang";
console.log(Hitest.city);
const ram = new NewUser("H@r.com", "ram");
