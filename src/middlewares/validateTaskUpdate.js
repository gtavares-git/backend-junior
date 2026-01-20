function validateTaskUpdate(req, res, next) {
  const { title, done } = req.body;

  if (!title && typeof done !== "boolean") {
    return res.status(400).json({
      error: "Informe ao menos 'title' ou 'done' para atualizar"
    });
  }

  if (title && (typeof title !== "string" || title.trim() === "")) {
    return res.status(400).json({
      error: "Title deve ser uma string não vazia"
    });
  }

  if (done !== undefined && typeof done !== "boolean") {
    return res.status(400).json({
      error: "Done deve ser boolean"
    });
  }

  next();
}

module.exports = validateTaskUpdate;
