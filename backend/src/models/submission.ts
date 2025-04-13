import mongoose from "mongoose";

const submisstionSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    courseId: {},
    answers: [
      {
        email: String,
        verified: Boolean,
      },
    ],
  },
  {
    collection: "submissions",
    timestamps: true,
  }
);

export const Submission = mongoose.model("Submission", submisstionSchema);
