type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditcardDetails?:number
}

let myUser:User = {
    _id:"1245",
    name:"manasa",
    email:"m@gm.com",
    isActive:true
}

let myUserwithCC:User = {
    _id:"1234",
    name:"m",
    email:"m@gmail.com",
    isActive:false,
    creditcardDetails:8907655
}

myUser.email = "m@gmail.com"
//myUser._id = "123" throws error
myUser.creditcardDetails = 343492349


type cardNumber = {
    cardNumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}
export{}