const express = require("express");

const app = express();
const PORT = 4001;

// Middleware to read JSON data
app.use(express.json());

// Employee data
let employees = [
    {
        id: 1,
        name: "Suman",
        department: "IT",
        salary: 30000
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 35000
    }
];

// Home route
// app.get("/", (req, res) => {
//     res.send("Employee API is working!");
// });


// READ - Get all products
app.get("/employees", (req, res) => {
    res.json(employees);
});

// CREATE - Add a new employee
app.post("/employees", (req, res) => {
    //console.log("hiiii");

    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee created successfully",
        employee: newEmployee
    });
});

// UPDATE - Update an existing employee
app.put("/employees/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employee.name = req.body.name;
    employee.department = req.body.department;
    employee.salary = req.body.salary;

    res.json({
        message: "Employee updated successfully",
        employee: employee
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});