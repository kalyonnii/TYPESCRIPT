// const a="1";
// console.log("aaa",a);

let hello="world"

const getFullName=(name:string,surname:string)=>{
    return name+" "+surname;
};
console.log(getFullName("bunny","chinni"));

interface User{
    name:string;
    age?:number;
    getMessage():string;
}

const user:User={
    name:"bunny",
    age:22,
    getMessage(){
        return "hello"+name
    }
};
const user2:User={
    name:"chinni",
    getMessage(){
        return "hello"+name
    }
}
console.log(user.name);
console.log(user.getMessage() );