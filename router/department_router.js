const express = require("express");
const Department = require("../model/department");
const router = express.Router();

router.get("/", async (req, res) => {
  const getAll = await Department.find();
  res.status(200).json(getAll);
});

router.post("/", async (req, res) => {
  const { name, department, salary } = req.body;
  const getAll = await Department.create({ name, department, salary });
  res.status(200).json({ data: getAll });
});

router.put("/:id", async (req, res) => {
  const getAll = await Department.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ success: true, data: getAll });
});

router.delete("/:id", async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "Successfully Delete!" });
});
module.exports = router;
