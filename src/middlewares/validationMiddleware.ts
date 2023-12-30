import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validatePlaceBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string(),
    image: Joi.string(),
    localization: {
      adress: Joi.string(),
      altitude: Joi.number(),
      longitude: Joi.number(),
      link: Joi.string(),
    },
    contact: {
      webLink: Joi.string(),
      phone: Joi.number(),
      instagram: Joi.string(),
      facebook: Joi.string(),
      email: Joi.string(),
    },
  });
  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
}
