//Interview question: Sort an Array
//Write a function to sort an array of numbers in an ascending order.
//eg. console.log(sortAscending([5, 6, 2, 4, 8]) output: [2, 4, 5, 6, 8]

//method 1 using for loop without changing original array
let num =[4, 5, 3, 1, 7, 8];
function numAscending(num){
    let numArray=JSON.parse(JSON.stringify(num)); //deep copy, here numArray = [...num] and numArray =num.slice() also work, both are use for shallow copy
for(let i=0; i<numArray.length; i++){
    for(let j=0; j<numArray.length-1-i; j++){
        if(numArray[j]>numArray[j+1]){
            let keys=numArray[j];
            numArray[j]=numArray[j+1];
            numArray[j+1]=keys;
        }
    }
}return numArray;
}
console.log(numAscending(num)); //[ 1, 3, 4, 5, 7, 8 ]
console.log(num);//[ 4, 5, 3, 1, 7, 8 ] result means original array not changed


//method 2 using for loop but changes in original array
let arr = [2, 4, 1, 5, 6];
function arrAscending(){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let key=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=key; 
            }
        }
    }return arr;
}
console.log(arrAscending(arr));//[ 1, 2, 4, 5, 6 ]
console.log(arr);//[ 1, 2, 4, 5, 6 ] , result means original array changed.


//method 3 using sort method
let array = [2, 10, 4, 2, 8, 5];
let arraySort= array.sort((a,b)=>a-b);
console.log(arraySort);//[ 1, 2, 2, 4, 5, 8 ], make changes in original array.