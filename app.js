import cors from "cors";
import express from "express";
import { Counter } from "./counterModel.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.send("Working ! ");
});

const updateCounter = async () => {
  try {
    await Counter.updateOne(
      { _id: "65b41825323f453f580268d6" },
      { $inc: { count: 1 } }
    );
    let Count = await Counter.find();
    return Count[0].count;
  } catch (error) {
    console.log(error);
  }
};

app.get("/showhtlsomelove", async (req, res) => {
  const counterValue = await updateCounter();
  res.json({
    value: counterValue,
  });
});

export { app };
