//Question: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// method 1 using new Set() method 
const removeDuplicate=(num)=>{
    let result = Array.from(new Set(num));
    return result;
}
let numArr= [2, 4, 5, 7, 2, 4, 8];
 console.log(removeDuplicate(numArr));


//method 2 using pure for loop
const removeDuplicate2 =(num)=>{
    let result=[];
    for(let i=0; i<num.length; i++){
        let isDuplicate = false;

        //chech if num[i] is already in result
        for(let j=0; j<result.length; j++){
            if(num[i]===result[j]){
                isDuplicate=true;
                break;
            }
        }if(!isDuplicate){
            result.push(num[i])
    }
  }
    return result;
}
console.log(removeDuplicate2(numArr));


// method 3 using for loop with includes()
const removeDuplicate1=(num)=>{
    let result = [];
    for(let i=0; i<num.length; i++){
        if(!result.includes(num[i])){  //includes() chek that num[i] is unique or not
            result.push(num[i]);
        }
    }return result;
}
console.log(removeDuplicate1(numArr));

// method 4 using Array.filter() and Array.indexOf()
const removeDuplicates=(num)=>{
    return num.filter((items, index)=>num.indexOf(items)===index);
}
console.log(removeDuplicates(numArr));


// method 5 using Array.reduce() and includes()
const removeDuplicates1=(num)=>{
        const unique = num.reduce((acc, curr)=>{
            if(!acc.includes(curr)){
                acc.push(curr);
            }
            return acc;
        }, []);
        return unique;
}
console.log(removeDuplicates1(numArr));


// method 6 using Array.reduce() and indexOf()
const removeDuplicates2=(num)=>{
    const unique= num.reduce((acc, curr)=>{
        if(acc.indexOf(curr)===-1){
            acc.push(curr);
        }
        return acc
    },[]);
    return unique;
}
console.log(removeDuplicates2(numArr));


//method 7 using regular object
const removeDuplicate4=(num)=>{
    const unique = {};  //regular object useful for primitive values(numbers, string). 
    const result = [];
    for(let item of num){
        if(!unique[item]){
            unique[item] = true;
            result.push(item);
        }
    }
    return result;
}
console.log(removeDuplicate4(numArr));


// method 8 using Array.map()
const removeDuplicate3=(num)=>{
    const seen = new Map();
    const result = [];
    for(let item of num){
        if(!seen.has(item)){
            seen.set(item, true); //works as directory no need to check again the whole array. Useful for long arrays.
            result.push(item);
        }
    }
    return result;
}
console.log(removeDuplicate3(numArr));


//method 9 using sort() method 
//in this method we sort the array which results that the duplicate comes together then we can easily  pick unique one, useful for primitive type. 
const removeDuplicate5 = (num)=>{
    num.sort((a,b)=>a-b);
    const result = [num[0]];
    for(let i = 1; i<num.length; i++){
        if(num[i]!==num[i-1]){
            result.push(num[i]);
        }
    }
    return result;
}
console.log(removeDuplicate5(numArr));