# API REST - Clean Architecture con Node.js y MySQL

Este proyecto es una API REST creada con **Node.js** y **MySQL** utilizando la **Clean Architecture**. El propósito de este API es gestionar información sobre autores y libros en una base de datos relacional.

## Estructura del Proyecto

El proyecto está organizado según los principios de **Clean Architecture**. La estructura del proyecto es la siguiente:

├── src/ │ ├── domain/ │ │ ├── entities/ │ │ │ ├── author.js │ │ │ └── book.js │ │ └── repositories/ │ │ ├── authorRepository.js │ │ └── bookRepository.js │ ├── usecases/ │ │ ├── authorUseCase.js │ │ └── bookUseCase.js │ ├── infrastructure/ │ │ ├── database/ │ │ │ └── mysqlConnection.js │ │ └── repositories/ │ │ ├── authorRepositoryImpl.js │ │ └── bookRepositoryImpl.js │ ├── adapters/ │ │ ├── controllers/ │ │ │ ├── authorController.js │ │ │ └── bookController.js │ │ └── routes/ │ │ ├── authorRoutes.js │ │ └── bookRoutes.js │ └── server.js

### Descripción de las Capas

- **Dominio (Domain Layer)**: Contiene las entidades (`author.js`, `book.js`) y las interfaces de los repositorios.
- **Casos de Uso (Use Case Layer)**: Contiene la lógica de negocio para manejar autores y libros (`authorUseCase.js`, `bookUseCase.js`).
- **Infraestructura (Infrastructure Layer)**: Implementa la conexión con la base de datos MySQL y las implementaciones de los repositorios.
- **Adaptadores (Adapter Layer)**: Proporciona los controladores y las rutas para exponer la API REST.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener los siguientes requisitos:

- **Node.js** (Versión LTS recomendada) - [Descargar Node.js](https://nodejs.org/)
- **MySQL** (o un cliente compatible como MySQL Workbench) - [Descargar MySQL](https://dev.mysql.com/downloads/installer/)

npm install


-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS library_db;

-- Usar la base de datos creada
USE library_db;

-- Crear la tabla de autores
CREATE TABLE IF NOT EXISTS authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Crear la tabla de libros
CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  authorId INT NOT NULL,
  FOREIGN KEY (authorId) REFERENCES authors(id) ON DELETE CASCADE
);

-- Insertar algunos datos de prueba
INSERT INTO authors (name) VALUES ('J.K. Rowling');
INSERT INTO authors (name) VALUES ('George R.R. Martin');
INSERT INTO authors (name) VALUES ('J.R.R. Tolkien');

INSERT INTO books (title, authorId) VALUES ('Harry Potter and the Philosopher\'s Stone', 1);
INSERT INTO books (title, authorId) VALUES ('Harry Potter and the Chamber of Secrets', 1);
INSERT INTO books (title, authorId) VALUES ('A Game of Thrones', 2);
INSERT INTO books (title, authorId) VALUES ('A Clash of Kings', 2);
INSERT INTO books (title, authorId) VALUES ('The Hobbit', 3);
INSERT INTO books (title, authorId) VALUES ('The Lord of the Rings', 3);

Correr el proyecto
npm run dev
