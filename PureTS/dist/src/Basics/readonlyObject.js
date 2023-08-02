"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myUser = {
    _id: "1245",
    name: "manasa",
    email: "m@gm.com",
    isActive: true
};
let myUserwithCC = {
    _id: "1234",
    name: "m",
    email: "m@gmail.com",
    isActive: false,
    creditcardDetails: 8907655
};
myUser.email = "m@gmail.com";
//myUser._id = "123" throws error
myUser.creditcardDetails = 343492349;
