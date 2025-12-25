const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
  console.log(`Andre ${port} click here http://localhost:3000/`);
});