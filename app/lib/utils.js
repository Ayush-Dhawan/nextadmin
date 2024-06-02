import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("connected")
  } catch (error) {
    console.log(error)
    console.log(" not connected")
    throw new Error(error);
  }
};