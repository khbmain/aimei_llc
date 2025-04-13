import { UserInputError } from "apollo-server-express";
import { User } from "../models/userModel";
import {
  adminAccess,
  authenticate,
  authenticatedAccess,
  confirmAccess,
  ecryptPassword,
  generateToken,
} from "../utils/auth";
import { UserInputInterface } from "../graphql/typeDefs";
import { ContextType } from "../graphql/context";
import { generateOtp, sendMessage } from "../utils/helper";

export const bcrypt = require("bcryptjs");
export async function me(_: any, input: any, ctx: any, info: any) {
  authenticatedAccess;
  const data = await User.findOne({ _id: ctx._id });

  return data;
}

export async function loginUser(
  _: any,
  user: { phone: string; password: string },
  ctx: any,
  info: any
) {
  const { phone, password } = user;
  const userData = await User.findOne({ phone });
  if (!userData) throw new UserInputError("User not found");
  if (authenticate(password, userData!.password as string)) {
    return generateToken({
      _id: userData!._id!.toString(),
      phone,
      role: userData.role as string,
    });
  }
}

export async function register(
  parent: any,
  user: UserInputInterface,
  ctx: ContextType
) {
  user.password = ecryptPassword(user.password);
  let data = await User.findOne({ phone: user.phone });

  if (!data) {
    data = await User.create(user);
  }

  if (data && data.status !== "verify-required") {
    throw new UserInputError("User already exists");
  }

  const otp = generateOtp(4);
  sendMessage(data!.phone!, `Tanii otp code: ${otp}`);

  await User.findOneAndUpdate(
    { phone: user.phone },
    {
      phoneOtp: otp,
      phoneOtpExpire: new Date(Date.now() + 10 * 60 * 1000),
    },
    { new: true }
  );

  return generateToken({
    _id: data!._id!.toString(),
    phone: data!.phone!,
    role: data.role as string,
  });
}

export async function registerConfirm(
  _: any,
  { otp }: { otp: string },
  ctx: ContextType
) {
  console.log("ctx", ctx);

  confirmAccess(ctx);
  const user = await User.findOne({ phone: ctx.phone, phoneOtp: otp });
  if (!user) throw new UserInputError("Invalid OTP");
  if (
    new Date(Date.now()) > user.phoneOtpExpire! &&
    user.phoneOtpExpire !== null &&
    user.phoneOtpExpire !== undefined
  ) {
    throw new UserInputError("OTP expired");
  }
  user.status = "active";
  user.phoneOtp = null;
  user.phoneOtpExpire = null;
  await user.save();

  return generateToken({
    _id: user!._id!.toString(),
    phone: ctx.phone as string,
    role: user.role as string,
  });
}

export async function registerUser(
  _: any,
  { user }: { user: UserInputInterface },
  ctx: ContextType
) {
  adminAccess(ctx);
  user.password = ecryptPassword(user.password);
  const newUser = new User(user);
  return newUser.save();
}

export async function listUsers(_: any, input: any, ctx: ContextType) {
  authenticatedAccess(ctx);
  const users = await User.find(input).sort({ createdAt: -1 });
  return users;
}
