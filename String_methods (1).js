let Name = "shreyash"
let lastname ="chougule"
console.log(Name.length);//length
console.log(Name.charAt(1))//getting char at index 1
let fullname = Name.concat(" " ,lastname)//joins two strings
console.log(fullname);
console.log(Name.at(-1)); // getting char of last index 't'

//accessing string elements in array like structure

console.log(Name[2]);
// extracting part of string
console.log(Name.slice(0, 6)); 

// substring ignores negative values
console.log(fullname.substring(7, 11)); 

let msg = "hello";

// converting to uppercase for display
console.log(Name.toUpperCase()); 

let email = "User@Gmail.COM";

// converting to lowercase for safe comparison
console.log(Name.toLowerCase()); 



// let letter = "A";

// // getting ASCII/Unicode value of character
// console.log(letter.charCodeAt(10)); // 65



