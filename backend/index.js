const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Olá Mundo!`);
});
app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//Connection to Mongo
mongoose
  .connect(
    "mongodb+srv://arthurkunz:TgKdvG04LYWx0R1i@cluster0.kmpdxxa.mongodb.net/mydatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
