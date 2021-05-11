const express = require("express");
const app = express();
const path = require("path");
const db =require("../src/db")
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())



app.listen(port, () => {
  console.log(`greenfield available on http://localhost:${port}`);
});
