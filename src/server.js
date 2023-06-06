const express = require('express');
const app = express();
const path = require('path');
const movies = require('./database.json')
const cors = require('cors')


app.use(cors())
app.use(express.static('public'))
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

;

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
