const express = require("express");
const {
  getAllenvironment,
  getEnvironmentById,
  createEnvironment,
} = require("../services/environment.services");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getAllenvironment();

  res.send(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getEnvironmentById(id);

  res.send(data);
});

router.post("/", async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);
    
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
