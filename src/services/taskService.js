const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/tasks.json");

createdAt: new Date().toISOString()

function readTasksFromFile() {
  try {
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, JSON.stringify([]));
      return [];
    }

    const data = fs.readFileSync(dataPath, "utf-8");

    if (!data) {
      fs.writeFileSync(dataPath, JSON.stringify([]));
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("JSON inválido detectado. Recriando arquivo...", error);
    fs.writeFileSync(dataPath, JSON.stringify([]));
    return [];
  }
}


function writeTasksToFile(tasks) {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}

function getAllTasks() {
  return readTasksFromFile();
}

function createTask(title) {
  const tasks = readTasksFromFile();

  const newTask = {
    id: Date.now(),
    title,
    done: false,
  };

  tasks.push(newTask);
  writeTasksToFile(tasks);

  return newTask;
}

function updateTask(id, updatedData) {
  const tasks = readTasksFromFile();

  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) return null;

  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
  writeTasksToFile(tasks);

  return tasks[taskIndex];
}

function deleteTask(id) {
  const tasks = readTasksFromFile();
  const filteredTasks = tasks.filter((t) => t.id !== id);

  if (tasks.length === filteredTasks.length) return false;

  writeTasksToFile(filteredTasks);
  return true;
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
