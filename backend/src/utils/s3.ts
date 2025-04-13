import { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_KEY } from "../utils/constants";

import { randomUUID } from "crypto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY as string,
    secretAccessKey: AWS_SECRET_KEY as string,
  },
});

export const uploadFile = async (
  file: Express.Multer.File
): Promise<string> => {
  const extension = file.originalname.split(".").pop();
  const key = `uploads/${randomUUID()}.${extension}`;

  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await s3Client.send(new PutObjectCommand(uploadParams));

  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
};
