let num= [10,30,3,8,7,16,45];
for (let i =0;i< num.length; i++){ //index notation     //for-loop passes three condition
    console.log(i);
    // console.log(num[i]);
}

// for of
// returns every element

for(let i = 0; i<num.length; i++){
    console.log({"num":num[i]})
    if(i === 3){
        break;
    }
   
}

// for (let i = 0; i < array.length; i++) {
//     console.log({"num":num[i]})
//     if (i===3) {
//         break;
//     }
    
// }
for(let i = 0; i<num.length; i++){
    if(i === 3){
        continue;
    }
    console.log({"continue":num[i]})
}

let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];

for (let x=0; x< arr1.length; x++) {
    if (x%2===0) {
            console.log(arr1);
    }
    
    // else {
    //         console.log(x);
    // }
}

// Get the sum of all elements in the following arrays.
let i=0;
for (let k =0; i<22; k++) {
    i+=2;
    console.log(i)
    
}
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair
let arrr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum = arrr1.map(function (num, index) { //map is used when  to perform an action on each element in a collection and gather the result in a new array
  return num + arr2[index];
 
}); 
console.log(sum)

// let sum1=arr9.map(function(k,l){
//     return k+arr8[l]
// })
// console.log(sum1)

// let arr4 = [1, 2, 3];
// let arr5 = [4, 5, 6];

// let newArr = arr4.concat(arr5);

// let val = newArr.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;

//     return val
// });

let arr6=[1,2,3,4];
let arr7=[5,6,7,8];

let x =0;
for (let i = 0; i < arr6.length; i++) {
    x+=arr6[i]
  
}

for (let i = 0; i < arr7.length; i++) {
    x+=arr7[i]
    
}
   console.log(x) 



// for (let i= 0; i < array.length; i++) {
// }

// function arrayPlusArray(arr1, arr2) {
//     let newArr = arr1.concat(arr2);
//     let val = newArr.reduce(function(accumulator, currentValue){
//       return accumulator + currentValue;
//     });
    
//     return val;
//   }

var str = 'helloworldhowyadoing?';

function toUpperCase(str) {
  return str.split('').map((v, i) => i % 2 == 0 ?v.toLowerCase() : v.toUpperCase()).join('');
}

console.log(toUpperCase(str));

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// We can use the charAt() to separate the first character and then use the toUpperCase() function to capitalize it.

