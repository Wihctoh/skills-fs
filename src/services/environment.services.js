const {
  getAllenvironmentDB,
  getEnvironmentByIdDB,
} = require("../repositoty/environment.repository");

async function getAllenvironment() {
  const data = await getAllenvironmentDB();

  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDB(id);

  return data;
}

module.exports = { getAllenvironment, getEnvironmentById };
