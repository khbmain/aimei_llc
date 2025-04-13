import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    title: { type: String, required: true },
  },
  {
    collection: "tag",
    timestamps: true,
  }
);

export const Tag = mongoose.model("Tag", TagSchema);
