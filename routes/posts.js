import express from "express";

const router = express.Router();

import {
  getPosts,
  creatPost,
  updatePost,
  deletePost,
  likePost,
  getPostBySearch,
} from "../controller/posts.js";
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.get("/search", auth, getPostBySearch);
router.post("/", auth, creatPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
