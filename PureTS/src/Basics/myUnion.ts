let score:number|string = 33
score = "maa"
score = 44
console.log(score)

type User = {
    name:string
    id:number
}

type Admin = {
    username:string
    id:number
}

let manasa:User | Admin = {
    name:"mansa",
    id:343
}

manasa = {username:"mansa",id:334}


function getDB_ID(id:number|string){
    console.log('db id is ${id}')
}

getDB_ID(3)
getDB_ID("4")


function getDBId(id:number|string){
    if(typeof id === "string"){
        id.toUpperCase()
    }
    // else(typeof id === "number"){
    //     id+2
    // }
}


//array
//allows either string/number, can not contain both at once
const data1:string[]|number[] = ["1","2","3","4"]
//allows both string and number, can contain both
const data2:(string|number)[] = ["1","2","3",4]

//acts like java - enum
let seatAllotment : "aisle"|"middle"|"window"

seatAllotment = "aisle"

export{}