const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./router/department_router"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
