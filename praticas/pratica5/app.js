const express = require("express");
const morgan = require("morgan");

const app = express();


app.use(express.json());
app.use(morgan("dev"));


const tarefaRouter = require("./routes/tarefaRouter");
app.use("/tarefas", tarefaRouter);


module.exports = app;
