function createUser({name:string,isPaid:boolean}){}

createUser({name:"manasa",isPaid:true})

function createCourse():{course:string,price:number}{
    return {course:"typescript",price:500}
}


let newUser = {name:"ram",isPaid:false}
createUser(newUser)

type User = {
    name:string
    email:string
    isActive:boolean
}

function createUser1(user:User){
    return {name:"",email:"",isActive:true}
}

createUser1({name:"",email:"",isActive:true})

type Point = {
    x:number
    y:number
}

function printCoord(pt:Point){
    console.log("x-coord:"+pt.x)
    console.log("y-coord:"+pt.y)
}

printCoord({x:100,y:100})

export{}