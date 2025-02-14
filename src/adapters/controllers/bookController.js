const BookUseCase = require('../../usecases/bookUseCase');

class BookController {
  constructor(bookRepository) {
    this.bookUseCase = new BookUseCase(bookRepository);
  }

  async getByAuthor(req, res) {
    try {
      const books = await this.bookUseCase.getByAuthor(req.params.authorId);
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const book = await this.bookUseCase.create(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;
