const express = require("express");
const connectdb = require("./configs/db");
const userRouts = require("./routs/userRouts");
const bankRouts = require("./routs/banRounts");
const app = express();
app.use(express.json());
app.use("/user", userRouts);

app.use("/bank", bankRouts);

app.listen(5000, () => {
  console.log("listing the port 5000");
});
