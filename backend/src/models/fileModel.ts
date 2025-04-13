import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    filename: { type: String },
    mimetype: { type: String },
    encoding: { type: String },
    url: { type: String, unique: true },
  },
  { collection: "File", timestamps: true }
);

export const File = mongoose.model("file", fileSchema);
