interface User {
    readonly dbid:number
    email:string,
    userid:number,
    googleId?:string
    startTrail: () => string
}

const manasa:User = {dbid:567,email:"m@gmail.com",userid:345,startTrail:()=>{
    return "trail started"
}}

//another way of declaring interface
interface UserCoupon {
    readonly dbid:number
    email:string,
    userid:number,
    googleId?:string
    startTrail():string
    getCoupon(couponame:string):number
}

//reopen interface or add value to existing one
interface UserCoupon {
    isPaid:boolean
}

const mansa:UserCoupon = {dbid:567,email:"m@gmail.com",userid:345,startTrail:()=>{
    return "trail started"
},
getCoupon:()=>{
    return 15
},
isPaid:true}

const mansa2:UserCoupon = {dbid:567,email:"m@gmail.com",userid:345,startTrail:()=>{
    return "trail started"
},
getCoupon:(name:"manasa10")=>{//here parameter can be anything but value must be string as declared in interface
    return 10
},
isPaid:true}

interface Admin extends User,UserCoupon {
    role:"admin"|"leader"
    adminId:number
}

export {}