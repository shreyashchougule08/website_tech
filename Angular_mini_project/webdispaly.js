// const
// in const value will not change 
 const a=10;
 document.writeln(a);

// var and let 
// ln let through scope re-updated

var A =100;
let b=200;

{
  var A=10;
  let b=20;
  document.writeln(A,b); // output 10 ,20

}
document.writeln(A,b); // output 10 200



// primitive types 7 
// 1 number

let c=10;
document.writeln(c);

//2 string
let msg="shreyash";
document.writeln(msg)

// 3 boolean
let login =true;
document.writeln(login)

//4 undefined
let x;
document.writeln(x);

// 5 Null
let data=null;
document.writeln(data);

// 6 Bigint

let Bigint= 12344454;
document.writeln(Bigint);



// check type of all type 
document.writeln(typeof(c));
document.writeln(typeof(msg));
document.writeln(typeof(login));
document.writeln(typeof(x));
document.writeln(typeof(data));
document.writeln(typeof(Bigint));

// Activity no 1 ( student info)
let name="shreyash";
let age=10;
let address="inchalkaranji"
let bloodgroup="b+"

document.writeln(name);
document.writeln(age);
document.writeln(address);
document.writeln(bloodgroup);

// 2 pass or fail 
let marks=40;


if(marks<35)
{
    document.writeln(" student pass");
}
else
{
    document.writeln("student fail");
}
// 3 odd even
let f = 3;

if (f % 2 == 0)
 {
    document.writeln("even");
} 
else 
    {
    document.writeln("odd");
}

// 4 for loop 

let num = 10;

for (let i = 0; i < 9; i++) {
    document.writeln("number :", i);
}

// 5 check valu eof a nd b wil change or not

let g=10;
  k=g;

  g=30;
  document.writeln(g);
  document.writeln(k);