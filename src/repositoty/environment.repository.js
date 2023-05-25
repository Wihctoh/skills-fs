const pool = require("../db");

async function getAllEnvDB() {
  const client = await pool.connect();
  const sql = "select * from environment";
  const result = (await client.query(sql)).rows;

  return result;
}

async function createEnvDB(label, category, priority) {
  const client = await pool.connect();
  const sql =
    "insert into environment (label, category, priority ) values ($1, $2, $3) returning *";
  const result = (await client.query(sql, [label, category, priority])).rows;

  return result;
}

async function getEnvByIdDB(id) {
  const client = await pool.connect();
  const sql = "select * from environment where id = $1";
  const result = (await client.query(sql, [id])).rows;

  return result;
}

async function updateEnvDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql =
    "update environment set label = $1, category = $2, priority = $3 where id = $4 returning *";
  const result = (await client.query(sql, [label, category, priority, id]))
    .rows;

  return result;
}

async function deleteEnvDB(id) {
  const client = await pool.connect();
  const sql = "delete from environment where id = $1 returning *";
  const result = (await client.query(sql, [id])).rows;

  return result;
}

async function patchEnvDB(id, cliendData) {
  const client = await pool.connect();
  const sql = "select * from environment where id = $1";
  const result = (await client.query(sql, [id])).rows;

  const newObj = { ...result[0], ...cliendData };

  const sql2 =
    "update environment set label = $1, category = $2, priority = $3 where id = $4 returning *";

  const newResult = (
    await client.query(sql2, [
      newObj.label,
      newObj.category,
      newObj.priority,
      id,
    ])
  ).rows;

  return newResult;
}

module.exports = {
  getAllEnvDB,
  createEnvDB,
  getEnvByIdDB,
  updateEnvDB,
  deleteEnvDB,
  patchEnvDB,
};
