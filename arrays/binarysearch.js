//Given an array num of numbers with length of n,find the target 13 in the array
//Return the index if the target is found else null 

function binary(num,target){//takes in two properties
    let left = 0;
    let right = num.length-1 ;

    while(left<=right){  //while loop to make sure there is no overlap
        let middle =Math.floor((left+right)/2);    //Finding the middle //floor returns a number to the nearest number eg;when having 10.5...it will return 10 only
        if (num[middle]===target){
            return middle
        }
        else if(num[middle]>target){
            right=middle -1;
        }
        else{
            left=middle +1;
        }
    }return null;



}
let num=[2,5,7,9,11,13,15,17,21,25];
let target = 13;

console.log(binary(num,target)) //conditional statement....//function