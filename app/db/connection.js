const { Client } = require("pg");

const dbClient = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1212roro",
  database: "postgres",
});
dbClient.connect();

module.exports = dbClient;
