let people = [
    {name:"Annnet",age:20,height:"5ft"},
    {name:"Henry",age:30,height:"6ft"},
    {name:"Susan",age:40,height:"7ft"}
];
let ages = people.map(item => item.age); //returns an array of object
console.log(ages);

let weights = people.map(item =>{ //adding a property
    return{
        ...item, //distructure (get the whole array using ...)
        weight:50
    }
})
console.log(weights);

let changeWeight = weights.map(item =>{
    if (item.name === "Ann") {
        item.weight = 60
    }
    return item
});
console.log({changeWeight});



// Given an array of strings, use a function to reverse all the 
// elements in the string in ascending order and the specific elements
//  in descending order


// Given an array of objects, each object representing a person with a name 
// and age property, write a function that returns the sum of all people who 
// are less than 18 years.
function peopleIdentity(people){
    let sum = 0
    for (let i = 0; i < people.length; i++) {
        if (people.age[i] < 18) {
            sum+=people.age[i]
        }
        return sum
        
    }
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

}
let sumOfAllPeople = peopleIdentity(people)
console.log(sumOfAllPeople);

// Using JS functions and an array of numbers, return positive if an element within 
// the array is positive, negative if an element is negative, else zero
function findPositiveOrNegative(nums){
    for (const num of nums) {
        if (num >0) {
            return "positive"
        }
        else if (num < 0) {
            return "negative"
        }
        else{
            return "zero"
        }
        
    }
}
let nums = [1,7,19,23,56]
console.log(findPositiveOrNegative(nums));

// Given an array of objects, where each object represents an employee with an id, name, and salary 
// property, write a function that returns a new array of employee objects sorted by their salary
//  in ascending order.
// function identityEmployee(person){
//     const person=[
//         {id: "3748787698", names: "James", salary: "60,0000"},
//         {id: "3478594578", names: "Jane", salary: "70,0000"},
//         {id: "5875964901", names: "Mary", salary: "90,0000"}

//     ]
// }
// let salary = person.map(item => item.salary); 
// console.log(salary.sort());