
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const produtosRouter = require('./routes/produtosRouter');

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`
)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/produtos', produtosRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Erro interno do servidor' });
});

module.exports = app;
