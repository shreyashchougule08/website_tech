let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());


console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getMonth());
console.log(mydate.getHours());
console.log(mydate.getMinutes());

// timestamp
let mytimestamp=Date.now();
console.log(mytimestamp);

console.log(Date.now(mytimestamp));
console.log(Date.now()/2000); // conveert into seconds


