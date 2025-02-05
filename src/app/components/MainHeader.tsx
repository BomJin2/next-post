"use client";

type Props = {
  onCreatePost: () => void;
};

function MainHeader({ onCreatePost }: Props) {
  return (
    <div className="flex flex-col w-full py-[60px] px-[60px] gap-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-white text-[40px]">Bomjin Poster</h1>
        <button className="px-[50px] py-[10px] bg-gray-200 rounded-lg" onClick={onCreatePost}>
          New Post
        </button>
      </div>
      <hr className="border-2"></hr>
    </div>
  );
}
export default MainHeader;
