import mongoose, { Schema } from "mongoose";

const counterSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Counter = mongoose.model("Counter", counterSchema);
