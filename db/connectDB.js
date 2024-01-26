import mongoose from "mongoose";


// Function which will connect application to mongodb database.
export const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/HTL`
    );
    console.log(
      `\nMongoDB Connected !! DB HOST :${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERR: AT connectDB Function", error);
    process.exit(1); // There are multiple exit codes.
  }
};
