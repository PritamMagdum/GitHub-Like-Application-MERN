import express from "express";
import { getUserProfileAndRepos } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
//TODO: two routes - 1)get likes 2) get post like a profile

export default router;
