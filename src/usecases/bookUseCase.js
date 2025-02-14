class BookUseCase {
    constructor(bookRepository) {
      this.bookRepository = bookRepository;
    }
  
    async getByAuthor(authorId) {
      return this.bookRepository.getByAuthor(authorId);
    }
  
    async create(bookData) {
      const book = new Book(null, bookData.title, bookData.authorId); // Create Book entity
      return this.bookRepository.create(book);
    }
  }
  
  module.exports = BookUseCase;
  