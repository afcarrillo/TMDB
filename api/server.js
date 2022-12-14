// Configuración del server
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const db = require("./config/db");

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

db.sync({ force: false }).then(() =>
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  })
);
