import placeData from "../data/place.json";
import { NextFunction, Request, Response } from "express";
import { getAllPlaces } from "../services/place.service";

export async function getPlacesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const places = await getAllPlaces();

    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
}
