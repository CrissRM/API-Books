require("dotenv").config();
const app = require("./app"),
  { App } = require("./config"),
  connectDB = require("./db/database");

const main = async () => {
  connectDB();
  await app.listen(app.get("port"));
  console.log(`Conectado a al servidor ${App.host}:${App.port}`);
};

main();
