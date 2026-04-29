// singelton object
const user=new Object({
  
});
console.log(user);
const user1={}  // non singelton object

user1.name="shreyash";
user1.id=101;
user1.islogin=true;

console.log(user1);

const user2={    // object in object 
    email:"shreyash08@gmail.com",
    usernamme:{
        fullname:{fname:"shreyash",
                  lname:"chougule"},
       
    }
}
console.log(user2.usernamme);
console.log(user2.usernamme.fullname);