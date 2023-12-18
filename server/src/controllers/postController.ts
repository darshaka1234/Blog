import Post from "../models/Post";
import Author from "../models/Author";

export const createPost = async (req, res) => {
  try {
    const { authorId, title, summary } = req.body;
    const postAuthor = await Author.findById(authorId);

    const newPost = new Post({
      title: title,
      author: postAuthor,
      summary: summary,
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { Id } = req.params;
    const post = await Post.findById(Id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { Id } = req.params;
    const { title, summary } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(Id, {
      title: title,
      summary: summary,
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { Id } = req.params;

    await Post.findByIdAndDelete(Id);

    res.status(200).json("Post Deleted successfully!");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
