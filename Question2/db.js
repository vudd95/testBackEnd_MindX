import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/backend");
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

export default connectDB;
