const items = [2,8,true,"seed",[7,9]];
const a = new Array(2,8,true,"seed");
console.log(items);
console.log(a);
//indexing....2d array(an array inside an array)
console.log(items[3]);
console.log(items[4][0]);

items.push(6) //"push is used to add an item at the end of an array"
console.log(items);

items.unshift("fruit");  //add items at the start of an array
console.log(items);

items.pop(); //removes an item at the beginning of an array
console.log(items);

items.shift(); //remove an item at the start of an array
console.log(items);

//array method (map()...goes through each array and forEach()...doesnt returns an array you have to craete another array outside)
//given an array of numbers,return an array x with each items multiplies by 4
//for each you need another array 
let num = [1,3,4,6,9,34];
let x = num.map(function(item){
    return item *4
})
console.log(x);

let x1 = [];
num.forEach(function(item){ 
x1.push(item *4)
})
console.log(x1);

let p=[2,5,1,9,5];
p.forEach((num) => console.log(num*4))
//merge: .concut and spread operator(...everything inside an item)
//Array concatatenation

let mix = items.concat(num)
console.log(mix);

let b = [false, "deny",...num]; 
console.log(b);

//destructing
let [z,w,y,...v] = [1,3,4,7,9,78];
console.log({z});
console.log({w});
console.log({y});
console.log({v});



