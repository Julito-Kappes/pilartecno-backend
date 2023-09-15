import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {}
