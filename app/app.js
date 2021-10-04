const express = require("express");
const dbClient = require("./db/connection");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
