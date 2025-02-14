const AuthorUseCase = require('../../usecases/authorUseCase');

class AuthorController {
  constructor(authorRepository) {
    this.authorUseCase = new AuthorUseCase(authorRepository);
  }

  async getAll(req, res) {
    try {
      const authors = await this.authorUseCase.getAll();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const author = await this.authorUseCase.create(req.body);
      res.status(201).json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthorController;
