const score:Array<number>=[]
const Name:Array<string>=[]

function identityOne<Type>(val:Type):Type{
    return val;
}

identityOne("mansa")

//shortcut
function identityTwo<T>(val:T):T{
    return val;
}

identityTwo("ram")