function validateCreateTask(req, res, next) {
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

  // normaliza o dado
  req.body.title = title.trim();

  next(); // libera a request
}

module.exports = validateCreateTask;
