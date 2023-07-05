class Person{
    constructor(name,age){ //properties //also constructor function
        this.name = name
        this.age = age
        this.race = 'black'
    }
    greet(){ //method
        console.log('Hello');
    }
}
let person = new Person('Jane',50)  //methods are outside contructor 
console.log(person);
person.greet();

class Student extends Person{
    constructor(name,age){
        super(name,age); //using the parent constructor Preson
    }
}
let student = new Student('Henry',45)
console.log({student})

Student.prototype.height ="6ft"
console.log(student.height);

//inheritance
class Sister extends Person{
    constructor(name,age){
        super(name,age) //overiding the parent
        this.name = name;
        this.age = age
        this.race ='white'

    }
}
let sister = new Sister('Joan',23)
console.log(sister);



