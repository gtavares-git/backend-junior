const express = require("express");
const router = express.Router();

const validateCreateTask = require("../middlewares/validateCreateTask");
const validateTaskUpdate = require("../middlewares/validateTaskUpdate");
const validateTaskId = require("../middlewares/validateTaskId");

const {
  getTasks,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers/taskController");

// GET /tasks
router.get("/", getTasks);

// POST /tasks
router.post("/", validateCreateTask, createTaskController);

// PUT /tasks/:id
router.put(
  "/:id",
  validateTaskId,
  validateTaskUpdate,
  updateTaskController
);

// DELETE /tasks/:id
router.delete(
  "/:id",
  validateTaskId,
  deleteTaskController
);

module.exports = router;
