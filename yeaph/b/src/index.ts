import express from "express";
import graphqlPlayground from "graphql-playground-middleware-express";
import { ApolloServer } from "apollo-server-express";
import dotEnv from "dotenv";
import cors from "cors";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { MongoClient } from "mongodb";

dotEnv.config();

const app = express();
app.use(cors(), express.json());

const client = new MongoClient(process.env.MONGO_URI as string);

const server = new ApolloServer({ typeDefs, resolvers });

app.get("/", (req: any, res: any) => {
  res.status(200);
  res.send("Hello ami");
});

console.log("env: ", process.env.NODE_ENV);

if (process.env.NODE_ENV !== "production")
  app.get("/playground", graphqlPlayground({ endpoint: "/graphql" }));

const PORT = 29;
server.start().then(async () => {
  await client.connect().then(() => console.log("MongoDB connected"));

  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Server running at http://localhost:${PORT}/playground`);
  });
});
