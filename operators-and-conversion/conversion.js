let a = 10;
let b= "10";
//Implicit coercion

let c = b +a;
console.log({c});
// console.log("Turn to number", b*1)
let d = b*1;

console.log(d +a);
let e = +b +a;
console.log({e});

//Explicit coercion
console.log({"number":Number(b)})
console.log({b})

console.log({"string":String(a)})
console.log({"array":Array(b)})