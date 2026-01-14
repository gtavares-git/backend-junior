const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../tasks.json");

const express = require("express");

const router = express.Router();

// "Banco de dados" em memória
let tasks = readTasks();
let idCounter = 1;

// GET /tasks
router.get("/", (req, res) => {
    res.json(tasks);
});

// POST /tasks
router.post("/", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Título é obrigatório" });
    }

    const newTask = {
        id: idCounter++,
        title,
        completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);

    saveTasks(tasks);

});

module.exports = router;

// PUT /tasks

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  if (title !== undefined) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  saveTasks(tasks);

  res.json(task);
});


// DELETE /task

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const index = tasks.findIndex(t => t.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Tarefa não encontrada"});
    }

    tasks.splice(index, 1);

    saveTasks(tasks);

    res.status(204).send();
});

// FUNÇÕES /task

function readTasks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}
