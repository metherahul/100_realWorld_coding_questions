//Question: Make a funtion to find longest word in a string.
//## method 1 using for loop
function findLongestWord1(string){
    if(string.trim().length===0){
        return false;
    }
    let arr1 = string.split(" ");
    let longestWord1 = "";
    for(let i=0; i<arr1.length; i++){
        if(arr1[i].length> longestWord1.length){
        longestWord1 = arr1[i];
        }
    }
    return longestWord1;
}
console.log(findLongestWord1('If you want shine like a sun, first burn like a sun.'));//output- shine


// //## method 2 using sort method
let findLongestWord2= (string)=>{
    if(string.trim().length===0){
        return false;
    }
    let arr2 = string.split(' ');
    let arrSort = arr2.sort((a,b)=>a.length-b.length);
    let longestWord2 = arrSort.at(-1); // .at(-1) is come form ES22 it is same as arrSort[arrSort.length-1];
    return longestWord2
}
console.log(findLongestWord2('If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance then anythings can be achieved')) //output- perseverance


//## method 3 using reduce method
const findLongestWord3=(string)=>{
    if(string.trim().length===0){
        return false;
    }
    let arr3 = string.split(' ');
    let longestWord3= arr3.reduce((longest, currentWord)=>{
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord3
}
console.log(findLongestWord3('Don\'t compare yourself with other no one can play your role better than you')); //output- yourself