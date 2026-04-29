    // const
// in const value will not change 
 const a=10;
 console.log(a);

// var and let 
// ln let through scope re-updated

var A =100;
let b=200;

{
  var A=10;
  let b=20;
  console.log(A,b); // output 10 ,20

}
console.log(A,b); // output 10 200



// primitive types 7 
// 1 number

let c=10;
console.log(c);

//2 string
let msg="shreyash";
console.log(msg)

// 3 boolean
let login =true;
console.log(login)

//4 undefined
let x;
console.log(x);

// 5 Null
let data=null;
console.log(data);

// 6 Bigint

let Bigint= 12344454;
console.log(Bigint);

// 7 symbol

let id=Symbol("12223");
console.log(id);

// check type of all type 
console.log(typeof(c));
console.log(typeof(msg));
console.log(typeof(login));
console.log(typeof(x));
console.log(typeof(data));
console.log(typeof(Bigint));

// Activity no 1 ( student info)
let name="shreyash";
let age=10;
let address="inchalkaranji"
let bloodgroup="b+"

console.log(name);
console.log(age);
console.log(address);
console.log(bloodgroup);

// 2 pass or fail 
let marks=40;


if(marks<35)
{
    console.log(" student pass");
}
else
{
    console.log("student fail");
}
// 3 odd even
let f = 3;

if (f % 2 == 0)
 {
    console.log("even");
} 
else 
    {
    console.log("odd");
}

// 4 for loop 

let num = 10;

for (let i = 0; i < 9; i++) {
    console.log("number :", i);
}

// 5 check valu eof a nd b wil change or not

let g=10;
  k=g;

  g=30;
  console.log(g);
  console.log(k);