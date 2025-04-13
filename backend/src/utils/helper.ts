import fs from "fs";
export async function sendMessage(phone: string, msg: string) {
  return fetch(
    `http://web2sms.skytel.mn/apiSend?token=e15685ef093326f258ab67e05ad8835435b4df7e&sendto=${phone}&message=${msg}`
  );
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
