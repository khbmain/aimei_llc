import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotEnv from "dotenv";
import cors from "cors";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";
import { context } from "./graphql/context";
import { renderPlaygroundPage } from "graphql-playground-html";
import alertRoutes from "./routes/alertRoutes";
import { MONGODB_URI, NODE_ENV, PORT } from "./utils/constants";
dotEnv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

app.use(cors(), express.json({ limit: "1000mb" }));

app.get("/", (req: any, res: any) => {
  res.status(200);
  res.send("Hello");
});
app.use("/", alertRoutes);
console.log("env: ", NODE_ENV);

server.start().then(async () => {
  await mongoose
    .connect(MONGODB_URI || "mongodb://localhost:27017/test", {
      serverSelectionTimeoutMS: 10000,
    })

    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.log("MongoDB connection error: ", err);
    });

  if (NODE_ENV === "development") mongoose.set("debug", true);

  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/playground", (req, res) => {
    res.send(renderPlaygroundPage({ endpoint: "/graphql" }));
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
});
