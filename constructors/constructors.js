function Person(name,age){ //pERSON HERE IS A CONSTRUCTOR
    this.name = name;  //the value "=name" is name pseed a argument same as age
    this.age =age;  //object inside a constructor
}
let person = new Person('Ann',25);
console.log({person});
console.log(person.age)

Person.height = "3ft";  //added a property
console.log({person});

let student = new Person('Henry',19);//creating an instance from the constructor //student is a an object instance
console.log({student})

//when you want to add property to an object
console.log(Person.prototype); //an empty object by default
Person.prototype.gender ="Female"; //gender is method name
console.log(Person.prototype);

let person2 =new Person("Jane",20);
console.log(person2);
console.log(person2.gender);
console.log(person.gender);

console.log(student.gender);
console.log(student);
student.gender ="male"
console.log(student.gender); //value for the property

//create many object to create each instance


