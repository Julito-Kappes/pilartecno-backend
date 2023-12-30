require("dotenv").config();
import express from "express";
import { router as placesRouter } from "./routes/places.router";

import { connect } from "./db/mongo";

const app = express();
const PORT = 3000;

connect();

app.use(express.json());

app.use("/places", placesRouter);
app.listen(PORT, () => {
  console.log("Servidor express iniciado en", PORT);
});
