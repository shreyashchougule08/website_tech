const arr1 = ["Apple", "Banana", "Mango"];
console.log(arr1);

const arr2 = [10, 20, 30, 40];
console.log(arr2[2]);

arr2[1] = 25;
console.log(arr2);

console.log(arr2.length);

arr1.push("Orange");
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.unshift("Grapes");
console.log(arr1);

arr1.shift();
console.log(arr1);

const arr3 = [5, 2, 9, 1, 7];
arr3.sort((a, b) => a - b);
console.log(arr3);

arr3.reverse();
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
const doubled = arr4.map(n => n * 2);
console.log(doubled);

const evenNumbers = arr4.filter(n => n % 2 === 0);
console.log(evenNumbers);

const sum = arr4.reduce((total, n) => total + n, 0);
console.log(sum);

const arr5 = ["HTML", "CSS", "JS"];
console.log(arr5.join(" - "));

const arr6 = [100, 200, 300, 400];
const sliced = arr6.slice(1, 3);
console.log(sliced);

const splicedArr = [1, 2, 3, 4, 5];
splicedArr.splice(2, 1, 99);
console.log(splicedArr);

const arr7 = ["Dog", "Cat", "Lion"];
console.log(arr7.includes("Cat"));

console.log(arr7.indexOf("Lion"));

const arr8 = [];
arr8[0] = "A";
arr8[1] = "B";
console.log(arr8);

const arr9 = [3, 6, 9, 12];
for (let i = 0; i < arr9.length; i++) {
  console.log(arr9[i]);
}

const arr10 = [1, 2, 3];
const merged = arr10.concat([4, 5, 6]);
console.log(merged);

const arr11 = ["x", "y", "z"];
console.log(Array.isArray(arr11));

const max = Math.max(...arr3);
console.log(max);

const min = Math.min(...arr3);
console.log(min);
