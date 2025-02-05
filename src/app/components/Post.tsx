"use client";

import { useState } from "react";
import MainHeader from "./MainHeader";
import PostList from "./PostList";

function Post() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="flex flex-col justify-center">
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={showModal} onClose={hideModalHandler} />
    </div>
  );
}
export default Post;
