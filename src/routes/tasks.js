const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../services/taskService");

router.get("/", (req, res) => {
  const tasks = getAllTasks();
  res.json(tasks);
});

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Título é obrigatório" });
  }

  const task = createTask(title);
  res.status(201).json(task);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = updateTask(id, req.body);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deleted = deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  res.status(204).send();
});

module.exports = router;
