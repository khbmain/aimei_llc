export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/yourdb";
export const AWS_BUCKET_NAME =
  process.env.AWS_BUCKET_NAME || "your-bucket-name";
export const AWS_REGION = process.env.AWS_REGION || "your-region";
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
