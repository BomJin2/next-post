type Props = {
  postText: string | undefined;
  postName: string | undefined;
};

function PostItem({ postText, postName }: Props) {
  return (
    <div className="flex flex-col w-[360px] p-[20px] h-[180px] opacity-30 hover:opacity-100 duration-300 bg-purple-300 rounded-lg gap-[12px]">
      <p className="font-bold text-purple-800 text-[20px]">{postName}</p>
      <p className="text-[26px] text-purple-600">{postText}</p>
    </div>
  );
}
export default PostItem;
