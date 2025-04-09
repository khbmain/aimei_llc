import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { GraphQLError } from "graphql";
import { ContextType } from "../graphql/context";

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
}) => jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1d" });

export const decodeToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    console.error(err);
    return null;
  }
};

// access check
export function authenticatedAccess(ctx: ContextType) {
  if (!ctx._id || !ctx.role) {
    throw new GraphQLError("access denied");
  }
}

export function sohAccess(ctx: any) {
  if (!ctx._id || !ctx.role || ctx.role !== "soh" || ctx.role !== "admin") {
    throw new GraphQLError("access denied");
  }
}

export function adminAccess(ctx: any) {
  if (!ctx.role || ctx.role !== "admin") {
    throw new GraphQLError("access denied");
  }
  return true;
}
