const express = require("express");
const {
  getAllEnv,
  createEnv,
  getEnvById,
  updateEnv,
  deleteEnv,
  patchEnv,
} = require("../services/environment.services");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAllEnv();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnv(label, category, priority);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getEnvById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnv(id, label, category, priority);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnv(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cliendData = req.body;
    const data = await patchEnv(id, cliendData);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
