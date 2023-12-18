import Author from "../models/Author";

export const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Author.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
