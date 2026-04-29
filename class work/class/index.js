// const express = require("express");
// const app = express();

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log("data received:", new Date());
    next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get("/api", (req, res) => {
  res.send("welcome to api page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// function checkRoute(req, res,next) {
//    console.log(req.url);
//    next();
   

// }
// app.use(checkRoute);

// app.get("/contact", (req, res) => {
//   res.send("welcome to contact page");
// });

// app.get("/services", (req, res) => {
//   res.send("welcome to services page");
// });

// app.get("/products", (req, res) => {
//   res.send("welcome to products page");
// });
