import { Request, Response } from "express";

export async function createStarController(req: Request, res: Response) {
  const {
    id,
    name,
    type,
    distancia,
    mass,
    radius,
    temperature,
    luminosity,
    age,
    composition: {},
    stellar_history,
  } = req.body;

  res.status(200).json({
    status: "OK",
  });
}
