//-----------//* hace la conexion con mongo dbs//---------

import  mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
};
