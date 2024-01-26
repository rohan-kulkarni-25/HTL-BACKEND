import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import { app } from "./app.js";

dotenv.config({});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed :- ", error);
  });
