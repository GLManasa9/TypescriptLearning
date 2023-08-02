"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = "maa";
score = 44;
console.log(score);
let manasa = {
    name: "mansa",
    id: 343
};
manasa = { username: "mansa", id: 334 };
function getDB_ID(id) {
    console.log('db id is ${id}');
}
getDB_ID(3);
getDB_ID("4");
function getDBId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    // else(typeof id === "number"){
    //     id+2
    // }
}
//array
//allows either string/number, can not contain both at once
const data1 = ["1", "2", "3", "4"];
//allows both string and number, can contain both
const data2 = ["1", "2", "3", 4];
//acts like java - enum
let seatAllotment;
seatAllotment = "aisle";
