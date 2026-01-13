const express = require("express");

const router = express.Router();

// "Banco de dados" em memória
let tasks = [];
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
});

module.exports = router;