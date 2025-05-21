// Factoriral Finder

//method 1 using recursion
const findFactorial =(num)=>{
    if(num===0||num===1)return 1;
    return num*findFactorial(num-1);
}
console.log(findFactorial(4)); //24


//method 2 using reduce method
const findFactorial1=(num)=>{
    if(num===0||num===1){
        return 1
    }else{
    return Array.from({length:num}, (_,i)=>i+1).reduce((acc,curr)=>acc*curr, 1);
}
}
console.log(findFactorial1(5)); // 120


//method 3 using for loop
const findFactorial2=(num)=>{
if(num===0||num===1){
    return 1;
};
let  result = 1;
for(let i=1; i<=num; i++){
    result*=i;
}return result;
}
console.log(findFactorial2(6));// 720


//method 4 by memoization recursion also  called caching
const memo = {};
const findFactorial3=(num)=>{
    if(num===0||num===1)return 1;
    if(memo[num])return memo[num];
    memo[num]=num*findFactorial3(num-1);
    return memo[num];
}
console.log(findFactorial3(5));//120
