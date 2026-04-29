// handling response and request
// express application handling means http request and response
//request object conatain information about the client request ex - url, method, header, body ,query parameter,request word
// app.get("/", (req, res) => {
//  console.log(req.query.name);
//   res.send("Hello World!"); 
//    });

//Activity - 1.

const express = require("express");
const app = express();  
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});