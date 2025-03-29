const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 5000;

const mongoURI = "mongodb://localhost:27017/news";

app.use(express.json());

// Define a schema for a "User" document
const news = new mongoose.Schema({
  title: String,
  src: String,
  desc: String,
});

const newsData = mongoose.model("news", news);

app.get("/", async (req, res) => {
  const data = await newsData.find();
  console.log("data is:", data);
  res.send(`hi bro your data is:  ${JSON.stringify(req.params)}`);
});

app.post("/", async (req, res) => {
  const { title, desc, img } = req.body;
  const data = new newsData({ title, desc, img });
  try {
    await data.save();
    res.sendStatus(200).json(data);
  } catch (err) {
    res
      .sendStatus(400)
      .json({ error: "Error creating user", details: err.message });
  }
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`server working on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("MongoDB connection error:", err));
