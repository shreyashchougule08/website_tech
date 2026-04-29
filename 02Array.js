const superheros=["Ironman","Spiderman","Thor","Hulk"];
console.log(superheros);

const villan=["Loki","Thanos","Ultron"];
// it combine two arrays

superheros.push("captain america")
console.log(superheros);

console.log(superheros[3]);
console.log(superheros[3][3]); // output is k (3rd index of 3rd index)

const anime=["death note","naruto","one piece","dragon ball z"];

superheros.concat(villan);
console.log(superheros.concat(villan)); // concat use for add two array and return new array (in that superhero and villan are combine in it

const AnotherArray=[1,2,3,[4,5,6,7,8],9,10]; // output is [1,2,3,[4,5,6],7,8]
console.log(AnotherArray);

const AnotherArray1=AnotherArray.flat(Infinity);   // flat use for remove nested array and make single array
console.log(AnotherArray1); // these is use for convert multiple array into single array output is [1,2,3,4,5,6,7,8]

// nested array example how wthey nested array falted default value is 1 
// infinity use for remove all nested array
// flaten all matters no matter how many nested array are there
// flat doesnt change original array it return new array usefull when nested array are there

// const AnotherArray2=[1,2,3[4,5,6,[7,8,9]],10];
//  AnotherArray2=AnotherArray1.flat(Infinity);
// console.log(AnotherArray2);


// data scripting using these method
console.log(Array.isArray("shreyash"));
console.log(Array.isArray(superheros));
// check if the value is array in  not 

console.log(Array.from("shreyash"));
//convert and itertable object like string map into array

console.log(Array.from({name:"shreyash"}));
// it return empty array because object is not itertable

Object.keys({name:"shreyash"});
console.log(Object.keys({name:"shreyash"}));
// it return all keys of object in array form

let score1=100;
let score2=200; 
let score3=300;
console.log(Array.of(score1,score2,score3));
// it convert the list of values into array
// create new array from given value no matters how many
// (array.from=convert values , array.of=create array from values)