import mongoose from "mongoose";

const ctMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error.message);
  }
};

export default ctMongoDB;
