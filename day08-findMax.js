//Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

//method 1 using for loop
const findMax=(num)=>{
    let maxNum=num[0];
    for(let i=0; i<num.length; i++){
        if(num[i]>maxNum){
            maxNum=num[i];
        }
    }return maxNum;
}
console.log(findMax([3, 4, 1, 7, 8, 9])); //9


//method 2 using Math.max() a global method
const findMax2=(num)=>{
    let maxNum = Math.max(...num);
    return maxNum;
}
 console.log(findMax2([3, 4, 1, 7, 8, 9])); //9


//  method 3 using reduce method
const findMax3 =(num)=>{
    return num.reduce((acc, curr)=>(acc<curr?curr:acc),num[0]);
}
console.log(findMax3([3, 4, 1, 7, 8, 9]));//9



