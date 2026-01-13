const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());

// Rotas
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de tarefas funcionando!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
