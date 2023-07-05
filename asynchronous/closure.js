let greet =() =>{
    let name = 'John'
    let dislayName =()=>{
        return `Hi I am ${name}`;
    }
    return dislayName

}
let talk = greet();
console.log(talk()); ///we call the displayName as a function


let nums =(nums)=>{
    let add = (digit) =>{
        return nums+digit
    }
    return add
}
let addition = nums(45);
console.log(addition(20));