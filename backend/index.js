const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
mongoose
  .connect(
    "mongodb+srv://arthurkunz:tDLlr9ZDunuRG1fU@mevn.ctzfnih.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const TodosRoute = require("./routes/Todos");
app.use("/todos", TodosRoute);
