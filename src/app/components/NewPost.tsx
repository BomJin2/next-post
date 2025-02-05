"use client";

import { supabase } from "@/utils/supabase";
import { useState } from "react";

type PostType = {
  Text: string | undefined;
  Name: string | undefined;
};
type Props = {
  onClose: () => void;
  onAddPost: (postData: PostType) => void;
};

function NewPost({ onClose, onAddPost }: Props) {
  const [postText, setPostText] = useState<string | undefined>();
  const [postName, setPostName] = useState<string | undefined>();

  const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  };
  const nameChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostName(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = {
      Text: postText,
      Name: postName,
    };
    onAddPost(postData);
    onClose();
  };

  const addPostHandler = async () => {
    const { data, error } = await supabase
      .from("Post")
      .insert([{ Text: postText, Name: postName }])
      .select();
  };
  return (
    <form className="flex flex-col w-[400px] bg-purple-500 py-[40px] px-[20px] gap-4" onClick={(e) => e.stopPropagation()} onSubmit={addPostHandler}>
      <div>
        <div className="flex flex-col">
          <label htmlFor="text" className="text-white text-[28px]">
            Text
          </label>
          <textarea
            name=""
            id="text"
            rows={3}
            onChange={textChangeHandler}
            className="rounded-lg resize-none py-2 px-2 bg-purple-300 text-purple-700"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white text-[28px]">
            {" "}
            Your name
          </label>
          <textarea
            name=""
            id="name"
            rows={1}
            onChange={nameChangeHandler}
            className="rounded-lg resize-none py-2 px-2 bg-purple-300 text-purple-700"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="flex py-1 px-4  rounded-md text-white bg-purple-700 hover:bg-purple-600 duration-300" type="submit">
          저장
        </button>
        <button className="flex py-1 px-4  rounded-md text-white bg-purple-700 hover:bg-purple-600 duration-300" onClick={onClose}>
          취소
        </button>
      </div>
    </form>
  );
}
export default NewPost;
