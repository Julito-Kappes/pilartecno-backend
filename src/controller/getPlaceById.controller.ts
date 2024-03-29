import { NextFunction, Request, Response } from "express";
import { getPlaceById } from "../services/place.service";

export async function getPlaceByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const place = await getPlaceById(id);
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
