console.log ("star");
 function add(a,b)
 {
    return a+b;
 }
 let result= add(5,10);
    console.log(result);
 // a synchronice in javascript some task take time apicall , fileread,database  call etc  
//js doesnt wait it moves to nnext line behavoiur nonblocking 
// used fatching data from server
// reding file,
//  settimeout,
//  apicall
console.log("start");
setTimeout(( )=>
    {
  console.log("inside settimeout");
},2000);
// it is asynchronous code it will execute after 2 second but js will not wait it will move to next line
//after 2 sec it will print inside settimeout
// h.w 
// guess the output game 
// blocking and non-blocking  2 example each
// apifetch mthod 
