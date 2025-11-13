import express from "express";
import apidocsRouter from "./routes/apidocsRouter.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API da prática 09 funcionando! 🚀");
});


app.use("/api-docs", apidocsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
