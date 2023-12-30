import mongoose from "mongoose";
import { IPlace } from "../interfaces/IPlace";

const placeSchema = new mongoose.Schema<IPlace>({
  name: String,
  type: String,
  image: String,
  localization: {
    adress: String,
    altitude: Number,
    longitude: Number,
    link: String,
  },
  contact: {
    webLink: String,
    phone: Number,
    instagram: String,
    facebook: String,
    email: String,
  },
});

export const Place = mongoose.model("Place", placeSchema);
