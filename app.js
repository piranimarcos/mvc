const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const { dbConection } = require("./db/config");

const app = express();
dbConection();

const routes = require("./routes");

const port = 3000;

// generador de vistas
app.set("view engine", "hbs");

// obtener datos
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(port, () => console.log(`Server runing in the port ${port}`));
