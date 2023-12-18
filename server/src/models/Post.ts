import mongoose from "mongoose";
import Author from "./Author";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: [Author.schema],
    summary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
