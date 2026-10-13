const express = require("express");

const app = express();
const PORT = 3000;

// Middleware for JSON data
app.use(express.json());

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
    res.send("Express server is working!");
});

// Validation middleware
function validateUser(req, res, next) {

    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({
            message: "Name, email and age are required"
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }

    if (age < 18) {
        return res.status(400).json({
            message: "Age must be 18 or above"
        });
    }

    next();
}

// POST request
app.post("/user", validateUser, (req, res) => {

    res.json({
        message: "User data is valid",
        user: req.body
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});