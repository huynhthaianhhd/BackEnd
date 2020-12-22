import httpStatus from 'http-status';
import ApiError from 'utils/ApiError';
import { env } from 'configs/vars';

export const errorHandler = (err, req, res) => {
  let { statusCode, message } = err;
  if (env === 'production') {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }
  res.locals.errorMessage = err.message;

  const response = {
    statusCode,
    message,
  };

  return res.status(statusCode).json(response);
};

export const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message);
  }

  return errorHandler(error, req, res);
};

export const notFoundHandler = (req, res, next) => {
  const err = new ApiError(httpStatus.NOT_FOUND, 'Not found');

  return errorHandler(err, req, res);
};
