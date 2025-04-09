import { UserInputError } from "apollo-server-express";
import { User } from "../models/userModel";
import {
  adminAccess,
  authenticate,
  authenticatedAccess,
  ecryptPassword,
  generateToken,
} from "../utils/auth";
import { UserInputInterface } from "../graphql/typeDefs";
import { ContextType } from "../graphql/context";

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
