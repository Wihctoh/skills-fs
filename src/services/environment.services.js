const {
  getAllEnvDB,
  createEnvDB,
  getEnvByIdDB,
  updateEnvDB,
  deleteEnvDB,
  patchEnvDB,
} = require("../repositoty/environment.repository");

async function getAllEnv() {
  const data = await getAllEnvDB();

  if (!data.length) throw new Error("database is empty!");

  return data;
}

async function createEnv(label, category, priority) {
  const data = await createEnvDB(label, category, priority);

  if (!data.length) throw new Error("obj not created");

  return data;
}

async function getEnvById(id) {
  const data = await getEnvByIdDB(id);

  if (!data.length) throw new Error("id not found!");

  return data;
}

async function updateEnv(id, label, category, priority) {
  const data = await updateEnvDB(id, label, category, priority);

  if (!data.length) throw new Error("id not found!");

  return data;
}

async function deleteEnv(id) {
  const data = await deleteEnvDB(id);

  if (!data.length) throw new Error("id not found!");

  return data;
}

async function patchEnv(id, cliendData) {
  const data = await patchEnvDB(id, cliendData);

  if (!data.length) throw new Error("id not found!");

  return data;
}

module.exports = {
  getAllEnv,
  createEnv,
  getEnvById,
  updateEnv,
  deleteEnv,
  patchEnv,
};
