import { supabase } from "@/utils/supabase";
import { MdDelete } from "react-icons/md";

type Props = {
  postText: string | undefined;
  postName: string | undefined;
  postId: string;
};

function PostItem({ postText, postName, postId }: Props) {
  const deletePost = async () => {
    const { error } = await supabase.from("Post").delete().eq("PostId", postId);
  };

  return (
    <div className="flex flex-col w-[360px] p-[20px] h-[180px] opacity-30 hover:opacity-100 duration-300 bg-purple-300 rounded-lg gap-[12px]">
      <p className="font-bold text-purple-800 text-[20px]">{postName}</p>
      <p className="text-[26px] text-purple-600">{postText}</p>
      <div className="flex w-full justify-end mt-4">
        <button onClick={deletePost}>
          <MdDelete size={30} />
        </button>
      </div>
    </div>
  );
}
export default PostItem;
