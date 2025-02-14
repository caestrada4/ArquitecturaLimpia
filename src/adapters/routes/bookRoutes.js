const express = require('express');
const BookController = require('../controllers/bookController');
const BookRepositoryImpl = require('../../infrastructure/repositories/bookRepositoryImpl');

const router = express.Router();
const bookRepository = new BookRepositoryImpl();
const bookController = new BookController(bookRepository);

router.get('/:authorId', (req, res) => bookController.getByAuthor(req, res));
router.post('/', (req, res) => bookController.create(req, res));

module.exports = router;
