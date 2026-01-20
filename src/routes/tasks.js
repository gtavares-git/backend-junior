const express = require("express");
const router = express.Router();
const validateCreateTask = require("../middlewares/validateCreateTask");
const validateTaskUpdate = require("../middlewares/validateTaskUpdate");



const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../services/taskService");

// GET /tasks
router.get("/", (req, res) => {
  const tasks = getAllTasks();

  res.json({
    success: true,
    data: tasks,
  });
});

// POST /tasks
router.post("/", validateCreateTask, (req, res) => {
  const { title } = req.body;

  const task = createTask(title);

  res.status(201).json({
    success: true,
    data: task,
  });
});


// PUT /tasks/:id
router.put("/:id", validateTaskUpdate, (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  const task = updateTask(id, req.body);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  res.json(task);
});

// DELETE /tasks/:id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deleted = deleteTask(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      error: "Tarefa não encontrada",
    });
  }

  res.status(204).send();
});

module.exports = router;
