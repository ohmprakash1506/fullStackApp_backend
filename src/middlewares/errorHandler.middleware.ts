import { customError } from "../users/models/middleware.model/error.model";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: TypeError | customError,
  req: Request,
  res: Response,
  next: NextFunction
) => {};
