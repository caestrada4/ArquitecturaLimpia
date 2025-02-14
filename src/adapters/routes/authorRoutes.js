const express = require('express');
const AuthorController = require('../controllers/authorController');
const AuthorRepositoryImpl = require('../../infrastructure/repositories/authorRepositoryImpl');

const router = express.Router();
const authorRepository = new AuthorRepositoryImpl();
const authorController = new AuthorController(authorRepository);

router.get('/', (req, res) => authorController.getAll(req, res));
router.post('/', (req, res) => authorController.create(req, res));

module.exports = router;
