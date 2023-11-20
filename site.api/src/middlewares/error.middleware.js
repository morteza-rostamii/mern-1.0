
export const errorMiddleware = (error, req, res, next) => {

  // default status
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  const response = {
    msg: error.message,
    status: error.statusCode,
    error: error,
    endpoint: error?.endpoint,
  };

  res.status(error.statusCode).json(response);
}