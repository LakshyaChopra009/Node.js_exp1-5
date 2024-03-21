const fs = require('fs');

const fileName = 'myFile.txt';

// Asynchronous function for reading the file
function readFile(callback) {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            // Check for specific error code (ENOENT) or handle more broadly
            if (err.code === 'ENOENT') {
                console.error(`Error: File '${fileName}' not found`);
            } else {
                console.error('Error reading file:', err);
            }
            return callback(err); // Pass error to callback
        }
        callback(null, data); // Pass data to callback if successful
    });
}

// Call the asynchronous function with error handling callback
readFile((err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('File content:', data);
    }
});