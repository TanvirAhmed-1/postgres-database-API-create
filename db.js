const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "12345678",
  port: 5432,
  database: "products",
});

module.exports = pool;
