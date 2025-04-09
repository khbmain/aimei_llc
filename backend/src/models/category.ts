import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const Category = mongoose.model("Category", categorySchema, "categories");
