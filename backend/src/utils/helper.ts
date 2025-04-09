import fs from "fs";
export function sendMessage(msg: string) {
  msg;
  // return "hello";
}

export function generateOtp(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

export function saveBase64Image(base64String: string, filePath: string): void {
  // Remove the Base64 metadata part (before the comma), if present
  const base64Data = base64String.split(",")[1];

  // Convert the Base64 string to a Buffer
  const buffer = Buffer.from(base64Data, "base64");

  // Write the Buffer data to a file
  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error("Error saving the image:", err);
    } else {
      console.log("Image saved successfully");
    }
  });
}
