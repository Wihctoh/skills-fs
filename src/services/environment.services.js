const {
  getAllenvironmentDB,
  getEnvironmentByIdDB,
  createEnvironmentDB,
} = require("../repositoty/environment.repository");

async function getAllenvironment() {
  const data = await getAllenvironmentDB();

  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDB(id);

  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDB();

  const item = {
    id: data.length + 1,
    label: label,
    category: category,
    priority: priority,
  };

  const filtered = data.find((el) => el.label == label);
  if (filtered) throw new Error("alredy includes!");

  data.push(item);

  return data;
}

module.exports = { getAllenvironment, getEnvironmentById, createEnvironment };
