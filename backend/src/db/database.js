const mongoose = require("mongoose"),
  { Mongoose } = require("../config");

const connectDB = async () => {
  const db = await mongoose.connect(
    `${Mongoose.protocolo}${Mongoose.host}:${Mongoose.port}/${Mongoose.name}`
  );

  console.log(`Conectado a la base de datos MongoDB: ${db.connection.name}`);
};

module.exports = connectDB;
