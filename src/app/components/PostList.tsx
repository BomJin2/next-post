"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import PostItem from "./PostItem";
import { supabase } from "@/utils/supabase";

type Props = {
  isPosting: boolean;
  onClose: () => void;
};
type PostType = {
  Text: string;
  Name: string;
};

function PostList({ isPosting, onClose }: Props) {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    let { data, status, error } = await supabase.from("Post").select("*");
    if (data && status === 200) {
      setPosts(data);
    }
  };

  useEffect(() => {
    getPosts();
  }, [posts]);
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
        {posts.map((post, index) => (
          <PostItem postText={post.Text} postName={post.Name} />
        ))}
      </div>
    </div>
  );
}
export default PostList;
