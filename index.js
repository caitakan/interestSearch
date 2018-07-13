const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "this page is '/'"})
});

app.get("/api/testhi", (req, res) => {
  res.send({ hi: "there"});
});

const PORT = process.env.PORT || 8888;
app.listen(process.env.PORT || 8888);
