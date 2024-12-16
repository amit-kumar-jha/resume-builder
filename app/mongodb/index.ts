import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: "resume-builder",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );

    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
