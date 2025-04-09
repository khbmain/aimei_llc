import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    phone: { type: String, unique: true },
    role: { type: String, enum: ["user", "admin", "teacher"] },
    phoneVerified: { type: String, enum: ["true", "false"] },
    phoneOtp: String,
    phoneOtpExpire: Date,
    discipline: { type: String },
    fistName: { type: String },
    lastName: { type: String },
    status: { type: String, enum: ["active", "inactive"] },
    profilePic: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
  },
  { collection: "users", timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
