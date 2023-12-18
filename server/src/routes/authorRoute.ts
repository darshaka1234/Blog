import express from "express";
import { getAuthor } from "../controllers/authorController";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/:id", verifyToken, getAuthor);

export default router;
