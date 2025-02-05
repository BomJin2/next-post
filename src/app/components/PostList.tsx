"use client";

import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import PostItem from "./PostItem";

type Props = {
  isPosting: boolean;
  onClose: () => void;
};

function PostList({ isPosting, onClose }: Props) {
  return (
    <div className="flex justify-center">
      {isPosting ? (
        <Modal onClose={onClose}>
          <NewPost onClose={onClose} />
        </Modal>
      ) : (
        false
      )}

      <div className="grid grid-cols-3 gap-4">
        {/* {posts.map((post, index) => (
          <PostItem postName={post.Name} postText={post.Text} key={index} />
        ))} */}
      </div>
    </div>
  );
}
export default PostList;
