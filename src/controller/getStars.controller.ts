import starData from "../data/star.json";
import { Request, Response } from "express";

export async function getStarsController(req: Request, res: Response) {
  let stars = starData;

  res.status(200).json(stars);
}
