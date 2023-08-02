function addTwo(num:number):number{
    return num+2
}

function getUpper(str:string):string{
    return str.toUpperCase()
}

function signUp(name:string,email:string,isPaid:boolean){}

//assigning default value
let loginUser = (name:string,email:string,isPaid:boolean=false) => {}

addTwo(2)

getUpper("manasa")

signUp("manasa","manasa@tech.com",true)

loginUser("manasa","m@m.com")


const getHello = (s:string):string => {
    return "hello"
}

const heros = ["thor","superman","ironman"]

heros.map((hero) : string => {
    return 'hero is ${hero}'
})


function consoleError(errmsg:string){
    console.log(errmsg)
}

function handleError(errmsg:string) : never{
    throw new console.error(errmsg);
}

export{}