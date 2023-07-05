// function divideArray(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let middle =Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     console.log((left));
//     console.log(right);
//     return sortedArray(divideArray(left),divideArray(right)); //must finish the divide side before going to the sorted area

// }

// function sortedArray(left, right){
//     console.log("Hey I am here")
//     let emptyArr = [];
//     console.log("empty2", emptyArr)
//     console.log("left2",left);
//     console.log("right2", right);
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             emptyArr.push(left.shift());
//         }
//         else{
//             emptyArr.push(right.shift());
//         }
//     }
    
//     return [...emptyArr,...left,...right];
// }

// let arr =[3,10,2,50,1,4,6]
// console.log(divideArray(arr));

// function merge(arr);
// if (arr.length<1) {
//     return arr
// }

// let middle=Math.floor(arr.length/2);
// let left =arr.slice(0,middle);
// let right=arr.slice(middle);
// return sort(merge(left), merge(right))

// function sort(left,right);
// let empty=[];
// while (left.length&&right.length) {
//     if (left[0]<right[0]) {
//         empty.push(left.shift())
//     }
//     else{
//         empty.push(right.shift())
//     }
//     return[...empty,...left,...right]
// }

// let arr1=[10,12,4,7,9,15];
// console.log(merge(arr))




// function binary(arr,target){;
// let leftI=0;
// let rightI=arr.length-1;

// while(leftI<=rightI){
//     let middle=Math.floor((leftI+rightI)/2)
//     if (arr[middle]===target) {
//         return middle
//     }
//     else if
//         (arr[middle]>target){;
//         rightI=middle-1
//     }

//     else{
//         left=middle+1
//     }
// }
// }

// let target=7
// let arr2=[10,4,7,12,9,5];
// console.log(binary(arr,target))


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5.
//  Console the array with the new value

function MultipliedArray(array){
    for(let i = 0 ; i<array.length ; i++){
       if(i<4){
          (array[i]*=8)
       }else{
          (array[i]+=5)
       }
     
    }
    console.log(array)
   }
   let array = [1,2,3,4,5,6,7]
   MultipliedArray(array)