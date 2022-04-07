const notFound = (req, res, next) => {
  console.log('error');
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { notFound };
