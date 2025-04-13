import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal"],
      default: "credit_card",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "invoices", timestamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
