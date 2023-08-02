"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manasa = { dbid: 567, email: "m@gmail.com", userid: 345, startTrail: () => {
        return "trail started";
    } };
const mansa = { dbid: 567, email: "m@gmail.com", userid: 345, startTrail: () => {
        return "trail started";
    },
    getCoupon: () => {
        return 15;
    },
    isPaid: true };
const mansa2 = { dbid: 567, email: "m@gmail.com", userid: 345, startTrail: () => {
        return "trail started";
    },
    getCoupon: (name) => {
        return 10;
    },
    isPaid: true };
