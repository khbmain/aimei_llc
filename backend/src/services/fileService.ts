import { FileUpload } from "graphql-upload/processRequest.mjs";
import { AWS_BUCKET_NAME, MAIN_DIR } from "../utils/constants";
import path from "path";
import fs from "fs";
import { finished } from "stream/promises";
import { randomUUID } from "crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../utils/s3";

const uploadDir = `${MAIN_DIR}uploads`;

export const uploadFile = async (
  _: any,
  { file }: { file: Promise<FileUpload> }
) => {
  console.log(file);

  const { createReadStream, filename, mimetype, encoding } = await file;

  const stream = createReadStream();
  const filePath = path.join(uploadDir, filename);
  const out = fs.createWriteStream(filePath);
  stream.pipe(out);
  await finished(out);

  return {
    filename,
    mimetype,
    encoding,
    url: `http://localhost:4000/uploads/${filename}`,
  };
};

export const uploadFileS3 = async (
  _: any,
  { file }: { file: Promise<FileUpload> }
) => {
  const { createReadStream, filename, mimetype, encoding } = await file;
  const fileStream = createReadStream();

  const fileExt = path.extname(filename);
  const key = `${randomUUID()}${fileExt}`;

  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
    Body: fileStream,
    ContentType: mimetype,
  };

  await s3Client.send(new PutObjectCommand(uploadParams));

  const url = `https://${AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;

  return {
    filename,
    mimetype,
    encoding,
    url,
  };
};
