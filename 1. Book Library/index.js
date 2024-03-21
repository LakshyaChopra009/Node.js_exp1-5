const bookLibrary = require('./bookLibrary');

// Get all books
const allBooks = bookLibrary.getAllBooks();
console.log('All Books:');
allBooks.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
});

// Add a new book
bookLibrary.addBook('Pride and Prejudice', 'Jane Austen', 1813);
console.log('\nAdded a new book: Pride and Prejudice');

// Display updated list of books
const updatedBooks = bookLibrary.getAllBooks();
console.log('\nUpdated Books:');
updatedBooks.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
});