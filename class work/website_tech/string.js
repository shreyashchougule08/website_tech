// String basics
let str = "Hello";
console.log(str);
console.log(typeof str);
console.log(str.length);

// Escape characters
let s = "It's alright";
console.log(s);

let s2 = "They are called \"The great Maratha Warriers\" from India";
console.log(s2);

// String vs String Object
let s3 = "smith";
let s4 = new String("Jhon");

console.log(s3);
console.log(s4);

console.log(typeof s3); // string
console.log(typeof s4); // object

// Difference between String and Object

// String (immutable)
let language = "js";
language = "java";
console.log(language);

// Object (mutable)
let st = {
    lang: "java"
};
st.lang = "js";
console.log(st);
