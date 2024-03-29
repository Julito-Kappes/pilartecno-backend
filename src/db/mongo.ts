import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION as string);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
