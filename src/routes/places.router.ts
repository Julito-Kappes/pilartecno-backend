import { Router } from "express";
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlaceByIdController } from "../controller/getPlaceById.controller";
import { createPlaceController } from "../controller/createPlace.controller";
import { validatePlaceBody } from "../middlewares/validationMiddleware";
import { deletePlace } from "../services/place.service";
import { deletePlaceController } from "../controller/deletePlace";
import { updatePlaceController } from "../controller/updatePlace";

export const router = Router();

//basepath---> /places

router.get("/", getPlacesController);
router.get("/:id", getPlaceByIdController);
router.post("/", validatePlaceBody, createPlaceController);
router.delete("/:id", deletePlaceController);
router.patch("/:id", validatePlaceBody, updatePlaceController);
