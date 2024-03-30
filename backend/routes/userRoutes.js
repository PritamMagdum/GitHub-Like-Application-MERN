import express from "express";
import {
  getUserProfileAndRepos,
  likeProfile,
} from "../controllers/userController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
//TODO: two routes - 1)get likes 2) get post like a profile
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
