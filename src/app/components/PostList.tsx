"use client";

import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import PostItem from "./PostItem";

type Props = {
  isPosting: boolean;
  onClose: () => void;
};

type PostType = {
  Text: string | undefined;
  Name: string | undefined;
};

function PostList({ isPosting, onClose }: Props) {
  const [posts, setPosts] = useState<PostType[]>([]);

  const addPostHandler = (postData: PostType) => {
    setPosts((pre) => [postData, ...pre]);
  };
  return (
    <div className="flex justify-center">
      {isPosting ? (
        <Modal onClose={onClose}>
          <NewPost onClose={onClose} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostItem postName={post.Name} postText={post.Text} key={index} />
        ))}
      </div>
    </div>
  );
}
export default PostList;
