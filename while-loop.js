let num=[10,30,3,8,7,16,45];
let i=0;
let sum =0;
let multiply = 1
while(i<num.length){
    console.log(num[i]);
    console.log(sum+= num[i])
    console.log(multiply*=num[i]);

    // sum+=num[i]
    // multiply+=num[i] 
    i++
}
console.log(sum);
console.log(multiply)
//find the sum of all elements   //multiply, the declared variable will be(let multiply=1)not 0 because any number multiplied by 0 will give 0
// let sum =0
// console.log(sum+= num[i])