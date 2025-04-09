import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/multer-files");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post("/alarm_reciever", upload.any(), async (req, res) => {
  res.status(200).json({ message: "Alarm received" });
});

export default router;
