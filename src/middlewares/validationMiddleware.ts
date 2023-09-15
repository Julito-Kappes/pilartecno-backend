import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validateStarBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string(),
    distancia: Joi.string(),
    mass: Joi.string(),
    radius: Joi.string(),
    temperature: Joi.string(),
    luminosity: Joi.string(),
    age: Joi.string(),
    composition: {},
    stellar_history: Joi.string(),
  });
  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
}
