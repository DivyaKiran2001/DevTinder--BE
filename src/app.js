const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello1");
});

app.use("/test", (req, res) => {
  res.send("Hello2 from the server");
});

app.listen(3000, () => {
  console.log("listening to serer ...... ");
});
