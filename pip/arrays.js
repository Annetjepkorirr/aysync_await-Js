let num = [3,6,8,25,7,5,7];
console.log(num.length);

let multiples = num.map(item => item*2);   //maps return new array
console.log(multiples);

// let triples = num.forEach(item => item*2); ///returns undefined
// console.log(triples);

// let empty = []
// num.forEach(item =>{

    // console.log(items*2);  //will only work like a map only if you create an empty array outside
// }) 

let less = num.filter(item => item <10);
console.log({less});  //returns what is passed in the condition 

let getSeven = num.find(item => item ===7)  //returns the first occurence and stops there
console.log(getSeven);



function breakAtFourthIndex(arr) {
    let i = 0;
    while (i < arr.length) {
      if (i === 4) {
        break;
      }
      console.log(arr[i]); // Or do something else with the current element
      i++;
    }
  }
  let arr = [1,2,3,4,5,6,7]
  console.log(breakAtFourthIndex(arr));


  function divisibleByThree(nums){
    let divisible = nums.filter(num =>num%3 === 0);
    return divisible
  }
  let nums  = [3,9,13,4,7,18];
  console.log(divisibleByThree(nums));

  