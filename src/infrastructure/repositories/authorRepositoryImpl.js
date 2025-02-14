const AuthorRepository = require('../../domain/repositories/authorRepository');
const connection = require('../database/mysqlConnection');

class AuthorRepositoryImpl extends AuthorRepository {
  async getAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM authors', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM authors WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }

  async create(author) {
    return new Promise((resolve, reject) => {
      const { name } = author;
      connection.query('INSERT INTO authors (name) VALUES (?)', [name], (err, results) => {
        if (err) reject(err);
        resolve({ id: results.insertId, name });
      });
    });
  }
}

module.exports = AuthorRepositoryImpl;
