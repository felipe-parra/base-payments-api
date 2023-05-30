import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;
  const message =
    error.message || "It was not possible to process this request";
  response.status(status).send({
    ...error,
    status,
    message,
  });
};
