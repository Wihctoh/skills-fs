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

  return data;
}

async function createEnv(label, category, priority) {
  const data = await createEnvDB(label, category, priority);

  return data;
}

async function getEnvById(id) {
  const data = await getEnvByIdDB(id);

  return data;
}

async function updateEnv(id, label, category, priority) {
  const data = await updateEnvDB(id, label, category, priority);

  return data;
}

async function deleteEnv(id) {
  const data = await deleteEnvDB(id);

  return data;
}

async function patchEnv(id, cliendData) {
  const data = await patchEnvDB(id, cliendData);

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
