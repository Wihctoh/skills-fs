const express = require("express");
const {
  getAllenvironment,
  getEnvironmentById,
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

module.exports = router;
