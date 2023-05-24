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
  const data = await createEnvironmentDB(label, category, priority);

  const item = {
    id: data.length + 1,
    label: label,
    category: category,
    priority: priority,
  };

  const filtered = data.filter((el) => el.label == label);

  if (filtered.length > 0) throw new Error("alredy includes!");

  data.push(item);

  return data;
}

module.exports = { getAllenvironment, getEnvironmentById, createEnvironment };
