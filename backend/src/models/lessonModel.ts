import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  duration: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  tags: [{ type: String }],
  category: { type: String, required: true },
});
