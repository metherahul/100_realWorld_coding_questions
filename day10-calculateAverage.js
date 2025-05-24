// Question- Calculate the Average

// method 1 using for loop
const calculateAverage =(arr)=>{
    if (arr.length===0)return 0; //if the array is empty, safty check.
    let sum = 0;
    for(let i=0; i<arr.length; i++){   // it can also replace by for(let num of arr){sum+=num};
        sum += arr[i];
    }
    let average = sum/arr.length;
    return average;
}
console.log(calculateAverage([2, 5, 3, 7, 8])); //5



// method 2 using reduce method
const calculateAvg =(arr)=>{
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, curr)=>acc+curr,0);
    let average = sum/arr.length;
    return average;
}
console.log(calculateAvg([3, 4, 7, 1, 9]));// 4.8


//method 3 using eval function
const average = (arr)=>{
    let sum = eval(arr.map(String).join("+")); //done for practice but it is risky in terms of security
    let avg = sum/arr.length;
    return avg;
}
console.log(average([2, 4, 7, 1, 9]));//4.6


// method 4 using forEach method
const findAverage=(arr)=>{
    let sum =0;
    arr.forEach((num)=>sum+=num);
    return sum/arr.length;;
}
console.log(findAverage([3, 5, 4, 1, 8, 6, 9]));//5.14 approx.



// method 5 using recursion
const findAverage3 =(arr,index)=>{
    if(arr.length===0)return 0;//safty check for empty array
const sum = (arr, index=0) => {
    if(index===arr.length)return 0;
    return arr[index]+ sum(arr,index+1);
}; return sum(arr, index)/arr.length
};
console.log(findAverage3([2, 4, 5, 7, 8])); //5.2


// method 6 recursion with .at()
const avg=(arr, index=0, sum=0)=>{
    if(arr.length===0)return 0;
    if(index===arr.length)return sum/arr.length;
    return avg(arr, index+1, sum+ arr.at(index));
}
console.log(avg([2, 4, 6, 4, 5])); //4.2