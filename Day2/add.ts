
import {add} from './type'

const addNumber = (first:number, second:number):number => {
  return first + second  
}

console.log("final value",addNumber(1,4))

interface userDetails {
    name:string,
    age:number,
}

export default function setUser(userdetails:userDetails):{}{
    return ({
        userName:userdetails.name,
        userAge:userdetails.age
    })
}

console.log("userDetails",setUser({name:"gp",age:24}))