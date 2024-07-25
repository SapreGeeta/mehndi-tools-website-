import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//models
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

const app = express();

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

const connectMongoDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);

  if (conn) {
    console.log("Connected to MongoDB Successfully...");
  }
};
connectMongoDB();


//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
