import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToggle } from "../hooks";
import { addPost } from "../services";
import { BiImage, MdGif, FaRegLaughBeam } from "../Utils/icons";

function NewPost() {
  const [postText, setPostText] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toggle: posting, setToggle: setPosting } = useToggle(false);
  const { profileImg, username } = useSelector((state) => state.user);

  const addPostHandler = async () => {
    if (postText.trim().length === 0) {
      alert("We can't just post nothing!");
      return;
    }
    setPosting(true);
    const status = await addPost(
      { content: postText.trim() },
      auth.token,
      dispatch
    );
    setPosting(false);
    status === "SUCCESS" && setPostText("");
  };

  return (
    <div className="flex items-start gap-2 bg-transparent border border-slate-500 p-3">
      <div className="w-12">
        <img className="rounded-full" src={profileImg} alt={username} />
      </div>
      <div className="flex flex-col grow gap-2">
        <textarea
          className="resize-none m-0 h-28 max-h-64 p-1.5 text-xs sm:text-sm font-normal"
          placeholder="What's on your mind?"
          maxLength="280"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-xl text-white">
            <BiImage className="cursor-pointer" />
            <MdGif className="cursor-pointer text-3xl" />
            <FaRegLaughBeam className="cursor-pointer text-lg" />
          </span>
          <button
            className="basis-20 text-sm sm:text-base bg-blue-500 text-white p-1.5 font-robotoFlex w-20 rounded-r-2xl rounded-l-2xl"
            onClick={addPostHandler}
          >
            {posting ? (
              <span className="animate-pulse">Posting..</span>
            ) : (
              "Post"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
