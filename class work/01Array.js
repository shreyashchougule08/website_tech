let myArr=[10,20,30,40,50];

console.log(`$myArr.typeof()`);
const Arr=new Array(0,11,3);
console.log(Arr[1]);

myArr.push(60);  // add value in array
console.log(myArr);

myArr.pop(); // remove last value from array
console.log(myArr);

myArr.unshift(5); // add value at first index (it shift all elemnets and added at first elemnet)
console.log(myArr);

myArr.shift(20);
console.log(myArr); // remove first value from array (it shift all elemnets and remove first elemnet)

myArr.includes(30); // it return if the element is present in array or not true/false
myArr.includes(100);
console.log(myArr.includes(30));

i=myArr.indexOf(40); // it return index of element if present else return -1
console.log(i);
i=myArr.indexOf(100);
console.log(i);