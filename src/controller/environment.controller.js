const express = require("express");
const buildResponse = require("../helper/buildResponse");
const {
  getAllEnv,
  createEnv,
  getEnvById,
  updateEnv,
  deleteEnv,
  patchEnv,
} = require("../services/environment.services");
const { isValidEnvId, isValidEnvBody } = require("../helper/validation");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAllEnv();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", isValidEnvBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnv(label, category, priority);

    buildResponse(res, 200, data);
  } catch (error) {
    rbuildResponse(res, 404, error.message);
  }
});

router.get("/:id", isValidEnvId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getEnvById(id);

    buildResponse(res, 200, data);
  } catch (error) {
    rbuildResponse(res, 404, error.message);
  }
});

router.put("/:id", isValidEnvBody, isValidEnvId, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnv(id, label, category, priority);

    buildResponse(res, 200, data);
  } catch (error) {
    rbuildResponse(res, 404, error.message);
  }
});

router.delete("/:id", isValidEnvId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnv(id);

    buildResponse(res, 200, data);
  } catch (error) {
    rbuildResponse(res, 404, error.message);
  }
});

router.patch("/:id", isValidEnvId, async (req, res) => {
  try {
    const { id } = req.params;
    const cliendData = req.body;
    const data = await patchEnv(id, cliendData);

    buildResponse(res, 200, data);
  } catch (error) {
    rbuildResponse(res, 404, error.message);
  }
});

module.exports = router;
