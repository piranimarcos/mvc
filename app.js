const express = require("express");

require("dotenv").config();
const { dbConection } = require("./db/config");

const app = express();
dbConection();

const port = process.env.PORT;

app.listen(port, () => console.log(`Server runing in the port ${port}`));
