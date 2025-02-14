const BookRepository = require('../../domain/repositories/bookRepository');
const connection = require('../database/mysqlConnection');

class BookRepositoryImpl extends BookRepository {
  async getByAuthor(authorId) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM books WHERE authorId = ?', [authorId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async create(book) {
    return new Promise((resolve, reject) => {
      const { title, authorId } = book;
      connection.query('INSERT INTO books (title, authorId) VALUES (?, ?)', [title, authorId], (err, results) => {
        if (err) reject(err);
        resolve({ id: results.insertId, title, authorId });
      });
    });
  }
}

module.exports = BookRepositoryImpl;
