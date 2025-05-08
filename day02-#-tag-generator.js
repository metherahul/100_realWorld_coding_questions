// Question- Create a hashtag generator function that takes a string and generates a hashtag. The hashtag should start with a '#' and should be followed by the words in the string, capitalized. If the input string is empty or has more than 140 characters, return false. If the hashtag is valid, return it.
// Example: "Hello world" => "#HelloWorld", "a" => "#A", "" => false, "a".repeat(141) => false
// "Hello world".repeat(141) => false, "Hello world".repeat(140) => "#HelloWorldHelloWorld..."


const generateHashtag = (str) => {
    if(str.trim().length ===0|| str.length>140){
        return false
    };
    let string = str.split(/\s+/).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join('');
    let hashtag = '#' + string;
    return hashtag;
}
console.log(generateHashtag('Rashtriya ekta jindabaad')); // #RashtriyaEktaJindabaad












