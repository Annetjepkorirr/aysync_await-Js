function greet (){
    console.log("Welcome to our site"); //not asynchronouus will therefore be excecuted first
}
greet();

let data = [{}]

let createUser = new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve("User successfully created");},5000)
       
    }
    else{
        reject("User already exists")
    }
});

async function createUserAccount(){   //long running task
    let response = await createUser;  //awaiting for a promise to be resolved or rejected
    console.log({response});
}
createUserAccount()


let str = "beautiful"
let result =" "
for (let i = 0; i < str.length; i++) {
  if (i%2!=0){
    result+=str[i]
    
  }
}
console.log(result);




// function logMessageWithDelay(message, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(message);
//         resolve();
//       }, delay);
//     });
//   }
//   logMessageWithDelay("Hello World",2000)



// function performTask() {
//   return new Promise((resolve, reject) => {
//     // Perform the task asynchronously
//     // If the task is successful, call resolve()
//     // If there's an error, call reject()
//   });
// }

// async function executeTask() {
//   try {
//     await performTask();
//     console.log("Task completed successfully!");
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// executeTask();



// Write a function that accepts an array of numbers and 
// uses the forEach() method to console.log each number multiplied by 2.

function ArrayNumber(nums) {

  // for(i=0;i<=nums.length;i++){
    nums.forEach(function(n){
      console.log(n*2)
    }) ;
    
  
  }
  // }
  let nums = [2,4,6,5,9,10]
  ArrayNumber(nums)

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5.
//  Console the array with the new value

function MultipliedArray(array){
  for(let i = 0 ; i<array.length ; i++){
     if(i<4){
        array[i]*=8
     }else{
        array[i]+=5
     }
   
  }
  console.log(array)
 }
 let array = [1,2,3,4,5,6,7]
 MultipliedArray(array)  