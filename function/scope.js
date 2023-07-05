let a = 20;  //Global variable
function add(b){
    console.log(a + b);

    let c = 30 //local variable
    console.log(a + b + c);

}
add(20);


// //
function multipy(c){
    console.log(a * c);
}
multipy(3);

function greet(){
    let hello = "Hi"
    function talk(){
        let greeting = "Hey there"
        console.log(`${hello} ${greeting}`)
    }
    talk()
}
greet()