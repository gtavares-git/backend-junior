const express = require("express");
const router = express.Router();

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
router.post("/", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      error: "Request body is required",
    });
  }

  const { title } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Title is required and must be a non-empty string",
    });
  }

  const newTask = createTask({ title });

  res.status(201).json({
    success: true,
    data: newTask,
  });
});

// PUT /tasks/:id
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = updateTask(id, req.body);

  if (!task) {
    return res.status(404).json({
      success: false,
      error: "Tarefa não encontrada",
    });
  }

  res.json({
    success: true,
    data: task,
  });
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
