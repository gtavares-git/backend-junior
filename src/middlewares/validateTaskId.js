module.exports = (req, res, next) => {
  const { id } = req.params;

  const parsedId = Number(id);

  if (isNaN(parsedId)) {
    return res.status(400).json({
      success: false,
      error: "ID inválido",
    });
  }

  req.taskId = parsedId;
  next();
};
