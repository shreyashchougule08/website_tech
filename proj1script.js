function add() {
 let x=document.getElementById("a").value;
 let y=document.getElementById("b").value;

 document.getElementById("result").innerHTML=Number(x)+Number(y);

}
function subtract() {
  let x=document.getElementById("a").value;
  let y=document.getElementById("b").value;

    document.getElementById("result").innerHTML=Number(x)-Number(y);

}

function multiply() {
  let x=document.getElementById("a").value;
  let y=document.getElementById("b").value; 
    document.getElementById("result").innerHTML=Number(x)*Number(y);

}
function divide() {
  let x=document.getElementById("a").value;
  let y=document.getElementById("b").value; 
    document.getElementById("result").innerHTML=Number(x)/Number(y);        
}