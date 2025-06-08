let studentName = "    abc xyz   ";

// console.log(studentName.length);

// console.log(studentName);
// console.log(studentName.trimStart());
// console.log(studentName.trimEnd());
// console.log(studentName.trim());

let sentence = "JavaScript is a programming language that adds interactivity to websites.";

console.log(sentence + "\n" + sentence.length);

// console.log("Char At: "+ sentence.charAt(4)); Returns the character from string at specified index.

// console.log("Chat At: "+ sentence.indexOf("none")); Returns -1 if character or word doesn't exist in the string

// console.log("Index of: "+ sentence.indexOf("programming")); Returns the index of the first occurrence of the specified value.


// console.log(sentence.substring(0,10));    same result for both methods but skips the last index character
// console.log(sentence.slice(0,10));

// console.log(sentence.substring(1,1));     empty string result for both methods
// console.log(sentence.slice(1,1));

// console.log(sentence.substring(10));    same for both : end is not specified then it returns the string from starting position to the end
// console.log(sentence.slice(10));

// console.log(sentence.substring(15,0));  if start > end : swaps the start and end
// console.log(sentence.slice(15,0));     if start > end : returns empty string

// console.log("Substring : " + sentence.substring(-15,4));  if start is negative, it starts from 0
// console.log("Slice : " + sentence.slice(-15,0));          if start is negative, it returns empty string

// console.log("Substring: "+ sentence.substring(15,-4));  if end is negative, it ignores negative value and use 0
// console.log("Slice: "+ sentence.slice(15,-4));   if end is negative, it takes end = string length - Math.abs(negative value);   

// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

// console.log(sentence.substr(16,12));  substr(starting position, length of substring)
// console.log(sentence.substring(0,16)); substring(starting position, end position)

console.log(sentence.split(" "));

let url = "https://www.example.com/javascript%20strings%20examples";
console.log(url.replace("%20","-"));
console.log(url.replaceAll("%20","-"));


