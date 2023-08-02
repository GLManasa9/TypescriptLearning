"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUp(name, email, isPaid) { }
//assigning default value
let loginUser = (name, email, isPaid = false) => { };
addTwo(2);
getUpper("manasa");
signUp("manasa", "manasa@tech.com", true);
loginUser("manasa", "m@m.com");
const getHello = (s) => {
    return "hello";
};
const heros = ["thor", "superman", "ironman"];
heros.map((hero) => {
    return 'hero is ${hero}';
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new console.error(errmsg);
}
