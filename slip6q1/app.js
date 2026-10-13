const express = require("express");

const app = express();
const PORT = 4000;

// Middleware to read JSON data
app.use(express.json());

// Product data
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    }
];

// READ - Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// CREATE - Add a new product
app.post("/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});