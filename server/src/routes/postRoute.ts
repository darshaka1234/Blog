import express from "express";
import {
  getFeedPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:Id", verifyToken, getPost);
router.post("/", verifyToken, createPost);
router.patch("/:Id", verifyToken, updatePost);
router.delete("/:Id", verifyToken, deletePost);

export default router;
