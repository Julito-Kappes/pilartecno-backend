import { NextFunction, Request, Response } from "express";
import { deletePlace } from "../services/place.service";

export async function deletePlaceController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const place = await deletePlace(id);
    if (!place) {
      res.status(404).json({
        info: "place not found",
      });
    }
    res.json(place);
  } catch (error) {
    next(error);
  }
}
