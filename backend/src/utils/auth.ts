import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { GraphQLError } from "graphql";
import { ContextType } from "../graphql/context";
import { JWT_SECRET_KEY } from "./constants";

export function authenticate(plainTextPass: string | null, password: string) {
  if (!plainTextPass) return false;
  return bcrypt.compareSync(plainTextPass, password);
}

export const ecryptPassword = (password: string) =>
  bcrypt.hashSync(password, 10);

export const generateToken = (user: {
  _id: string;
  phone: string;
  role: string;
}) => jwt.sign(user, JWT_SECRET_KEY!, { expiresIn: "1d" });

export const decodeToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY!);
  } catch (err) {
    console.error(err);
    return null;
  }
};

// access check

export function confirmAccess(ctx: ContextType) {
  if (!ctx.authenticated || !ctx._id || ctx.exp! < Date.now() / 1000) {
    throw new GraphQLError("access denied");
  }
}

export function authenticatedAccess(ctx: ContextType) {
  if (!ctx._id || !ctx.role) {
    throw new GraphQLError("access denied");
  }
}

export function teacherAccess(ctx: any) {
  if (
    !ctx._id ||
    !ctx.role ||
    (ctx.role !== "teacher" && ctx.role !== "admin")
  ) {
    throw new GraphQLError("access denied");
  }
}

export function adminAccess(ctx: any) {
  if (!ctx.role || ctx.role !== "admin") {
    throw new GraphQLError("access denied");
  }
  return true;
}
