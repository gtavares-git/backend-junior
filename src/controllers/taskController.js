const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../services/taskService");

function getTasks(req, res) {
  const tasks = getAllTasks();
  res.json({ success: true, data: tasks });
}

function createTaskController(req, res) {
  const { title } = req.body;
  const task = createTask(title);

  res.status(201).json({
    success: true,
    data: task,
  });
}

function updateTaskController(req, res) {
  const id = Number(req.taskId);
  const task = updateTask(id, req.body);

  if (!task) {
    return res.status(404).json({
      error: "Tarefa não encontrada",
    });
  }

  res.json({ success: true, data: task });
}

function deleteTaskController(req, res) {
  const id = Number(req.taskId);
  const deleted = deleteTask(id);

  if (!deleted) {
    return res.status(404).json({
      error: "Tarefa não encontrada",
    });
  }

  res.status(204).send();
}

module.exports = {
  getTasks,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
