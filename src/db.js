const { Pool } = require("pg");

const pool = new Pool({
  password: process.env.PWD,
  database: process.env.DB,
  port: process.env.PORT_DB,
  host: process.env.HOST,
  user: process.env.USER,
});

module.exports = pool;
