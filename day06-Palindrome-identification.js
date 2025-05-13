//Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backword, ignoring spaces, punctuation, and capitalization.

// Method 1: Using String Reverse Technique
const isPalindrome=(str)=>{
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let strReverse = str.split('').reverse().join('');
    return str===strReverse;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false


//Method 2 Using for loop
const checkPalindrome=(str)=>{
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    for(let left=0, right=str.length-1; left<right; left++, right--){
        if(str[left]!==str[right]){
            return false; 
        }
    }return true;
}
console.log(checkPalindrome("A man, a plan, a canal: Panama"));//true
console.log(checkPalindrome("racecar"));//true
console.log(checkPalindrome('hello'));//false



//method 3 Using Array.every()
const palindrome=(str)=>{
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str.split('').every((char, i)=> char===str[str.length-1-i]);
}
console.log(palindrome("A man, a plan, a canal: Panama"));//true
console.log(palindrome("racecar"));//true
console.log(palindrome('hello'));//false


//mathod 4 Using Recursion
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