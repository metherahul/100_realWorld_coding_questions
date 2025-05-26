// Question: check if arrays are equal or not
let array1 = [2, 3, 6];
let array2 = [2, 3, 6];
let array3 = [2, 3, 1];
let array4 = [2, 4, 2];

// method 1 using for loop
const arraysAreEqual =(arr1, arr2)=>{
    if(arr1.length!==arr2.length){
        return false
    }
    else{
        for(let i=0; i<arr1.length; i++){
            if(arr1[i]!==arr2[i]){
                return false
            }
        }
    }return true
}
console.log(arraysAreEqual(array1, array2)); //true
console.log(arraysAreEqual(array3, array4)); //false


// method 2 using Array.every()
const arrAreEqual =(arr1, arr2)=>{
    return arr1.length===arr2.length &&
    arr1.every((e, i)=>e===arr2[i]);
}
console.log(arrAreEqual(array1,array2)); //true
console.log(arrAreEqual(array3,array4)); //true



//method 3 using json.stringify(), only useful in arrays containing primitive values. cannot use in arrays containing objects functions and nested references
const arrayAreEqual=(arr1, arr2)=>{
   return JSON.stringify(arr1)===JSON.stringify(arr2);
}
console.log(arrayAreEqual(array1, array2));
console.log(arrayAreEqual(array3, array4));



// method 4 using set() this is use when we want to remove duplicates from array
// line array1[2,3, 5, 2] become [2, 3, 5].
//Mostly use in the array of employeeID, students etc
const isEqualArray=(arr1, arr2)=>{
    return arr1.length===arr2.length && new Set([...arr1, ...arr2]).size===arr1.length;
}
console.log(isEqualArray(array1, array2));
console.log(isEqualArray(array3, array4));