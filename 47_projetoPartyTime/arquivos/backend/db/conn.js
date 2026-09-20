const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://AmandaVoiigt:AgataLion1411@cluster0.njocrjv.mongodb.net/?appName=Cluster0"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;