// Interview Question: Count Occurences of characters
// Task 
// Write a funciton called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character apeears in the string.

//method 1 using for loop
const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("Pneumonoultramicroscopicsilicovolcanoconiosis", "i"));  // Output: 6


//method 2 using reduce function
const countChars = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    return word.split('').reduce((acc, curr) => {
        return curr === char ? acc + 1 : acc;
    }, 0);
};
console.log(countChars("Pseudopseudohypoparathyroidism", "p")); // Output: 4
