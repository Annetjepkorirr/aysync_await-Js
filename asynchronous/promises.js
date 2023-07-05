let succes = true;   //either resolve or rejects

let promise =new Promise((resolve,reject)=>{  //promise is an object
    if (succes) {
        resolve('I have a job')
    }
    else{
        reject('I dont have a job')
    }
})
console.log({promise});

promise.then(()=>{                                      //chaining promises
    console.log('I will pay all depts');
})

promise.catch(error =>{
    console.log(error.message);
    console.log('I will apply again after three months');
})

promise.finally(()=>{
    console.log('I will make my family proud');
})