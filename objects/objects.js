// create an object
let person={
    name:"Marrion",
    age:21,
    height:"5ft",
    friend:{
        name:"Yvonne",
        age:25,
    }
}
let person1=new Object();
//console.log({person1});
person1.name="Lewin";//adding a new property
person1.age=40;
console.log({person1});
console.log(person.age)//log a value
person["age"]=25//update an existing property
console.log(person.friend.age);
console.log({person})