class AuthorUseCase {
    constructor(authorRepository) {
      this.authorRepository = authorRepository;
    }
  
    async getAll() {
      return this.authorRepository.getAll();
    }
  
    async getById(id) {
      return this.authorRepository.getById(id);
    }
  
    async create(authorData) {
      const author = new Author(null, authorData.name); // Create Author entity
      return this.authorRepository.create(author);
    }
  }
  
  module.exports = AuthorUseCase;
  