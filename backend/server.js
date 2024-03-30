import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import passport from "passport";
import session from "express-session";
import "./passport/githubAuth.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

// Middlewares
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(8080, () => {
  console.log("server started at port 8080");
  connectMongoDB();
});
