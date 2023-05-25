function isValidEnvId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error("id is not a number!");
  if (id < 0) throw new Error("id les then zero");

  next();
}

function isValidEnvBody(req, res, next) {
  const { label, category, priority } = req.body;

  if (!label) throw new Error("laber is empty");
  if (!category) throw new Error("category is empty");
  if (!priority) throw new Error("priority is empty");

  if (!isNaN(label)) throw new Error("laber not a number!");
  if (!isNaN(category)) throw new Error("category not a number!");
  if (!isNaN(priority)) throw new Error("priority not a number!");

  next();
}

module.exports = { isValidEnvId, isValidEnvBody };
