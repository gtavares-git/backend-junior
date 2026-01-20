const express = require("express");
const app = express();

const taskRoutes = require("./routes/tasks");

// middleware para JSON
app.use(express.json());

// rotas versionadas
app.use("/api/v1/tasks", taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
