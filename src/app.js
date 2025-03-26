const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mocksRouter = require('./routes/mocks.router');
const dotenv = require('dotenv')
require('dotenv').config()

app.use(express.json());
app.use('/api/mocks', mocksRouter);

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/miDB'; 
mongoose.connect(mongoUrl)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB', err));

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});