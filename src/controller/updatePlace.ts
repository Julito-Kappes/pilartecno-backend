import { NextFunction, Request, Response } from "express";
import { updatePlace } from "../services/place.service";

import { IPlace } from "../interfaces/IPlace";

export async function updatePlaceController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const placeData: IPlace = req.body;
    const response = await updatePlace(id, placeData);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
