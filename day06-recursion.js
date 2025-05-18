// Some examples on recursions
// 1.factorial
// 2.fibonacci series
// 3.sum of array elements
// 4.reverse a string
// 5.countdown function
// 6.power of a number
// 7.check palindrome (recursive)

//1.Factorial
const factorial = (num)=> {
    if(num===1)return 1; //base case to stop recursion
    return num*factorial(num-1)//recursive step
}
console.log(factorial(5))//120
console.log(factorial(4))//24


//2. Fibonacci series
const fibonacci = (num)=>{
    if(num===0)return 0;
    if(num===1)return 1;
    return fibonacci(num-1) + fibonacci(num-2); //recursive step
}
console.log([1, 2, 3, 4, 5].map(fibonacci)); //[ 1, 1, 2, 3, 5 ]



//3. Sum of an array
const sum=(arr, index =0)=>{
    if(index===arr.length)return 0;
    return arr[index] + sum(arr, index+1); //recursive step
}
console.log(sum([1, 2, 3, 4, 5, 6, 7]));// 28



//4. Reverse a string
const reverseString = (str)=>{
    if(str.length<=1)return str;
    return  reverseString(str.slice(1)) + str[0]; //recursive step
}
console.log(reverseString('javaScript'));//tpircSavaj



//5. Countdown function
let countdownFunction=(num)=>{
    if(num<0)return;
    console.log(num);
    setTimeout(()=>countdownFunction(num-1),1000);
}
countdownFunction(5);// 5, 4, 3, 2, 1, 0



//6. Power of number
const powerOfNumber = (base, power) => {
  if (base===0 && power===0) return 'undefined';
  if (base===0 && power<0) return 'undefined';
  if (base===0) return 0;
  if (power < 0) return 1 / powerOfNumber(base, -power);
  if (power === 0) return 1;
  return base * powerOfNumber(base, power - 1);  //Recursive call
};
console.log(powerOfNumber(0,0)); // undefined
console.log(powerOfNumber(0, 3)); // 0
console.log(powerOfNumber(0, -3)); // undefined
console.log(powerOfNumber(2, 3)); // 8
console.log(powerOfNumber(2, -3)); // 0.125



// 7.Checking Palindrome
const Palindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    const check = (s, left, right) => {
      if (left >= right) return true;
      if (s[left] !== s[right]) return false;
      return check(s, left + 1, right - 1);
    };
    return check(str, 0, str.length - 1);
  };
console.log(Palindrome("A man, a plan, a canal: Panama"));//true
console.log(Palindrome("racecar"));//true
console.log(Palindrome('hello'));//false
