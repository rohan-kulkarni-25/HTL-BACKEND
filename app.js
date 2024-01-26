import cors from "cors";
import express from "express";
import { Counter } from "./counterModel.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/showhtlsomelove", async (req, res) => {
  await Counter.updateOne(
    { _id: "65b41825323f453f580268d6" },
    { $inc: { count: 1 } }
  );
  let Count = await Counter.find();
  console.log(Count[0]);

  res.json({
    value: Count[0].count,
  });
});

export { app };
