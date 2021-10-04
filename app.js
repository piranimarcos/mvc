const express = require("express");

const { dbConection } = require("./db/config");

const app = express();
dbConection();

const port = 3000;

app.listen(port, () => console.log(`Server runing in the port ${port}`));
