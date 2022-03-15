const express = require('express')
const app = express();
const wilderRoutes = require("../routes/wilders");
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", wilderRoutes);
/* app.use(function(err: [], req: string, res, next) {
    console.error(err.stack, res.json);
    res.status(500).send(err.stack);
  }); */
  
module.exports = app;
