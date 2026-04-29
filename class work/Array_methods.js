let nums = [10, 20, 30];

// checking how many elements are in array
console.log(nums.length); 


let fruits = ["Apple", "Banana", "Mango"]
console.log(fruits.toString());//array to sting
console.log(fruits.at(-1));// gives value at that index
console.log(fruits.at(1));
console.log(fruits.join( " "));// joins array elements with spaces
// console.log(fruits.pop());//removes last element
// console.log(fruits);//prints ele except last element
console.log(fruits.push(" Papaya"));
console.log(fruits);
console.log(fruits.shift());//removes first element
console.log(fruits);

// for removing last ele use pop and for removing first ele use shift

console.log(fruits.unshift("Eat"));//adding new ele at first
console.log(fruits);

// console.log(Array.isArray(fruits));
// console.log(fruits.copyWithin(0,1));

let nested = [1, [2, [3, 4]]];

// flattening nested array
console.log(nested.flat(2)); // [1, 2, 3, 4]

let colors = ["red", "blue", "green", "yellow"];

// getting part of array without changing original
console.log(colors.slice(1, 3)); // ["blue", "green"]

let num = [1, 2, 3, 4];

// removing elements from array
nums.splice(1, 2); // splice method 
console.log(nums); // [1, 4]

let num2 = [1, 2, 3, 4];

// removing elements without changing original array
let newArr = nums.toSpliced(1, 2);
console.log(newArr); // [1, 4]
console.log(nums);   // [1, 2, 3, 4]

let str = "Hello World";
let arr = str.split(" "); // split method

console.log(arr);








