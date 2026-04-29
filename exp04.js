function buttonClick() {

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
  // clear old meassages
    document.getElementById("nameError").innerHTML="";
    document.getElemnetById("emailError").innerHTML="";
    document.getElementById("PasswordError").innerHTML="";
   
let isvalid=true;
    //name validation
    if(name==""){
        document.getElementById("nameError").innerHTML="Name is required";
        isvalid=false;
    }

    if(email=="" && !email.includes("@")){
      document.getElementById("emailError").innerHTML="email is required";
         isvalid=false;

    }
    if(password.lengtyh<6){
      document.getElementById("PasswordError").innerHTML="password must be 6 characters";
         isvalid=false;
        }

}