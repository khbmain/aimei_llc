import { decodeToken } from "../utils/auth";

// apollo graphql contxt.ts

export function context({ req }: any) {
  try {
    const token = req.header("authorization") || "";
    if (token) {
      return { ...(decodeToken(token) as Object), authenticated: true };
    }
  } catch (err) {
    console.error(err);
    return { authenticated: false };
  }
}

export type ContextType = {
  _id?: string;
  phone?: string;
  role?: string;
  exp?: number;
  authenticated?: boolean;
  // [key: string]: any;
};
