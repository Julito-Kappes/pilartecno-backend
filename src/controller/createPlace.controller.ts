import { NextFunction, Request, Response } from "express";
import { IPlace } from "../interfaces/IPlace";
import { createPlace } from "../services/place.service";

export async function createPlaceController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, type, image, localization, contact } = req.body;
    const placeData: IPlace = { name, type, image, localization, contact };
    const response = await createPlace(placeData);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
