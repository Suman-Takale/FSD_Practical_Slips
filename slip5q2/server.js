const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Hello from Node.js Server!</h1>");
    res.write("<p>Server is running successfully.</p>");

    res.end();
});

// Start the server
server.listen(4000, () => {
    console.log("Server is running at http://localhost:4000");
});