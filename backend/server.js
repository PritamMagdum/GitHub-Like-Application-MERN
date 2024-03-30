import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("server is ready");
});

// Middlewares
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(8080, () => {
  console.log("server started at port 8080");
  connectMongoDB();
});
