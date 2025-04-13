import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnail: { type: String, required: true },
    lessons: { type: mongoose.Types.ObjectId, ref: "Lesson" },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    collection: "courses",
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema, "courses");
