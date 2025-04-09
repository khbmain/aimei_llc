import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export function authenticate(plainTextPass, password) {
  if (!plainTextPass) return false;
  return bcrypt.compareSync(plainTextPass, password);
}

export const ecryptPassword = (password) => bcrypt.hashSync(password, 10);

export const generateToken = (user) =>
  jwt.sign(user, "nirun", { expiresIn: "1d" });

export const decodeToken = (token) => jwt.verify(token, "nirun");

let a = generateToken({ id: "namaste", email: "email" });
console.log(a);
console.log(decodeToken(a));
