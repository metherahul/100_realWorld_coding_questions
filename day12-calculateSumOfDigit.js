// Question: Calcualte the sum of digit of the given number 

// method 1 using .map().reduce()
const sumOfDigit =(num)=>{
    let digits = num.toString().split('').map(Number).reduce((acc, curr)=>acc+curr,0);
    return digits;
}
console.log(sumOfDigit(1234)); //10



// method 2 using Array.from().reduce()
const sumOfDigits =(num)=>{
    let digits = Array.from(String(num),Number).reduce((acc, curr)=>acc+curr,0);
    return digits;
}
console.log(sumOfDigits(12345)); //15



// method 3 using spread operator
const sumOfDigits1=(num)=>{
    return[...`${num}`].map(Number).reduce((acc, curr)=>acc+curr,0);
}
console.log(sumOfDigits1(564)); //15


//method 4 using for of
 const sumDigits = (num)=>{
    let sum=0;
    for(digits of num.toString()){
        sum+= +digits;  //+digits change "number" to number
    }
    return sum;
 }
 console.log(sumDigits(7895)); //29


 //method 5 using while loop purely mathematical approach,
 //no type conversion

const sumOfDigits2 = (num)=>{
    sum = 0;
    while(num>0){
        sum += num%10; // get last digit 
        num=Math.floor(num/10); // remove last digit
    }
    return sum;
}
console.log(sumOfDigits2(4325)); //14



//method 6 recursion 
const sumOfDigitsOfNumber = (num)=>{
    if(num===0) return 0;
    return (num % 10) + sumOfDigitsOfNumber(Math.floor(num/10));
}
console.log(sumOfDigitsOfNumber(987)); //24


