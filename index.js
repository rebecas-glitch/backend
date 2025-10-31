const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usuariosRouter = require("./routes/usuariosRouter");
const produtosRouter = require("./routes/produtosRouter");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.log("Erro ao conectar ao MongoDB:", err));

app.use("/usuarios", usuariosRouter);
app.use("/produtos", produtosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
