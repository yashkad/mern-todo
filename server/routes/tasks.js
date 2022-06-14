const Task = require("../models/task");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (e) {
    res.send(e).status(400);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send({
        length : tasks.length,
        data : tasks
    });
  } catch (e) {
    res.send(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body
    );
    res.send(updated);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send({ deleted: task });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
