"use strict";
const employees = [
    { id: 1, name: "Suman", salary: 20000 },
    { id: 2, name: "Rahul", salary: 30000 },
    { id: 3, name: "Priya", salary: 25000 },
    { id: 4, name: "Amit", salary: 35000 }
];
const result = employees.find(emp => emp.salary > 25000);
console.log("Employee with salary greater than 25000:");
console.log(result);
