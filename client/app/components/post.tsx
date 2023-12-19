import { PostType } from "../types/types";
import Renderhtml from "./renderHTML";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-bold text-3xl ">{post?.title}</h1>
      <Renderhtml htmlContent={post?.content} classname="" />
      <div className="font-medium">{`Author : ${post?.authorName}`}</div>
    </div>
  );
};

export default Post;
