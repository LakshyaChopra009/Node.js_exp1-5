const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the method and URL from the request
    const method = req.method;
    const url = req.url;

    // Set the response header
    res.setHeader('Content-Type', 'text/html');

    // Handle routes based on the URL and method
    if (url === '/') {
        // Respond to the root route
        if (method === 'GET') {
            res.writeHead(200);
            res.end('<h1>Welcome to the Home Page</h1>');
        } else {
            res.writeHead(405);
            res.end('<h1>Method not allowed on the Home Page</h1>');
        }
    } else if (url === '/about') {
        // Respond to the /about route
        if (method === 'GET') {
            res.writeHead(200);
            res.end('<h1>About Us</h1>');
        } else {
            res.writeHead(405);
            res.end('<h1>Method not allowed on the About Page</h1>');
        }
    } else {
        // Handle 404 Not Found
        res.writeHead(404);
        res.end('<h1>Page not found</h1>');
    }
});

// The server listens on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
