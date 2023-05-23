const pool = require("../db");

async function getAllenvironmentDB() {
  const client = await pool.connect();
  const queryText = "select * from environment";
  const arrOfVall = (await client.query(queryText)).rows;

  return arrOfVall;
}

async function getEnvironmentByIdDB(id) {
  const client = await pool.connect();
  const sql = `select * from environment where id = $1`;
  const arrOfVall = (await client.query(sql, [id])).rows;

  return arrOfVall;
}

module.exports = { getAllenvironmentDB, getEnvironmentByIdDB };
