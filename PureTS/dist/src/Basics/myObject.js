"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "manasa", isPaid: true });
function createCourse() {
    return { course: "typescript", price: 500 };
}
let newUser = { name: "ram", isPaid: false };
createUser(newUser);
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
function printCoord(pt) {
    console.log("x-coord:" + pt.x);
    console.log("y-coord:" + pt.y);
}
printCoord({ x: 100, y: 100 });
