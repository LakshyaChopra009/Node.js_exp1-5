const http = require('http');
const fs = require('fs');

const port = 8080; // Replace with desired port number
const fileName = 'myFile.txt'; // Replace with the actual file name

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/read-file') {
        // Read the file asynchronously
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.writeHead(500); // Internal Server Error
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404); // Not Found
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});