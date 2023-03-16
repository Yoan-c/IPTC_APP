exports.errorSend = (res, status, message) => {
  res.status(status).json({
    status: "error",
    message,
  });
};
