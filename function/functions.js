function add(a,b){
    console.log(a + b);
}
add(10,15);

//Return
function substract(a,b){
    return a - b;
}
console.log(substract(100,50));


let a = 20;  //Global variable
function add(b){
    console.log(a + b);
    let c = 30 //local variable
    console.log(a + b + c);
}
add(20);