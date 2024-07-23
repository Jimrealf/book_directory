const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook } = require('../controllers/validation');

// Get all books
router.get('/', bookController.getAllBooks);

//Add a new book
router.post('/', validateBook, bookController.addBook);

//Search books
router.get('/search', bookController.searchBooks);

// Get all authors
router.get('/authors', bookController.getAllAuthors);

// Get all genres
router.get('/genres', bookController.getAllGenres);

// Get a single book
router.get('/:id', bookController.getBook);

// Update an existing book
router.put('/:id', validateBook, bookController.updateBook);

// Delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
