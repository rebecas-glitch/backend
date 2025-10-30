
const express = require("express");

const cors = require('cors');

const router = require('./router');


const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: false })); 


app.use(cors());


app.use((req, res, next) => {
   console.log("Passei pelo middleware de app");
   next();   
}); 

app.use('/tarefas', router);


app.get('/', (req, res) => {
  res.send("Olá");
});


app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});


app.listen(3000, ()=>{
    console.log("App está On!");
})