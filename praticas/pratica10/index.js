const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.use("/usuarios", usuarioRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
