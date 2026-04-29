let myobj ={
    name:"shreyash",

    age:21,
    location: "india",
    email:  "shryea@gmail.com",
    is_login: true,
    login_day: ["monday","tuesday","wednesday"],
    
}

// there Are two types of object
// 1. object literal
// 2. object constructor
// 3.singlton (it create when constructor is used)

// when you create singleton object it means itself object is created
// when we create object leteral then singelton object not created
//object constructor create singelton object

// object leteral -->not singelton object
// object constructor --> singelton object

console.log(myobj.email);
console.log("full name");
console.log(myobj[" name"]);

// console.log(myobj.mysymbol);
// console.log(typeof (myobj.[mysymbol]));

// symbol example 
const mysymbol=Symbol("key");
const myobj1={
    [mysymbol]:"svj",
 
};
console.log(myobj1[mysymbol]);
console.log(typeof (myobj1[mysymbol]));
console.log(myobj1);
console.log(typeof(myobj1));

myobj.email="shreyashchouguele26@gmail.com";
console.log(myobj.email);

// it freez the object and we cant change any value in object

Object.freeze (myobj); 
myobj.email="shreyash@gmail.com";
console.log(myobj.email);

myobj.greeting=function(){
    console.log("hello world");
};
console.log(myobj.greeting);


