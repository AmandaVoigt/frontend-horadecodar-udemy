const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    // colocar o link do projeto do mongoDB de Amanda!
  );

  console.log("Conectado com sucesso!");
}

module.exports = main;