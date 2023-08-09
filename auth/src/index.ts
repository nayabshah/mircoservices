import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_Key is not defined");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to mongoDb");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("Listing on Port 3000!!!!");
  });
};

start();
