import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("server is ready");
});

// Middlewares
app.use(cors());
app.use("/api/users", userRoutes);

app.listen(8080, () => {
  console.log("server started at port 8080");
});
