const express = require('express');
const bodyParser = require('body-parser');
const authorRoutes = require('./adapters/routes/authorRoutes');
const bookRoutes = require('./adapters/routes/bookRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
