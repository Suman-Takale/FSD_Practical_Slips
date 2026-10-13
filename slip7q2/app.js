const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());

// User data
let users = [
    {
        id: 1,
        name: "Suman",
        email: "suman@gmail.com"
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("User API is working!");
});

// READ - Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// CREATE - Add a new user
app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});