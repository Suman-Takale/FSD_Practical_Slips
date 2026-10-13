"use strict";
const companies = [
    { id: 1, name: "TCS", workforce: 50 },
    { id: 2, name: "Infosys", workforce: 25 },
    { id: 3, name: "Wipro", workforce: 40 },
    { id: 4, name: "Google", workforce: 20 }
];
const result = companies.find(company => company.workforce > 30);
console.log(result);
