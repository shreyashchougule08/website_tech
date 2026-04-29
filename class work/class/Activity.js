const express = require("express");
const app = express();

// Middleware (to read JSON data)
app.use(express.json());

// GET → Read user
app.get("/user", (req, res) => {
    res.send("Get User");
});

// POST → Create user
app.post("/user", (req, res) => {
    res.send("Create User");
});

// PUT → Update user
app.put("/user", (req, res) => {
    res.send("Update User");
});

// DELETE → Delete user
app.delete("/user", (req, res) => {
    res.send("Delete User");
});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});