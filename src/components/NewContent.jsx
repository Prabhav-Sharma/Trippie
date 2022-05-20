import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../hooks";
import { BiImage, MdGif, FaRegLaughBeam, RiLoaderFill } from "../Utils/icons";
import { toast } from "react-toastify";

function NewPost({
  text = "Post",
  initialContent = "",
  callback = () => "SUCCESS",
  placeholder = "What's on your mind?",
  focus = false,
  pathname = "",
}) {
  const [contentText, setContentText] = useState(initialContent);
  const { toggle: saving, setToggle: setSaving } = useToggle(false);
  const { profileImg, username, _id } = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const callbackExecutionHandler = async () => {
    if (contentText.trim().length === 0) {
      toast.warn("We got nothing! Can't work with nothing!");
      return;
    }
    setSaving(true);
    const status = await callback(contentText);
    setSaving(false);
    if (status === "SUCCESS") {
      setContentText("");
      pathname && navigate(pathname);
    }
  };

  useEffect(() => {
    focus && inputRef.current.focus();
  }, []);

  return (
    <div className="flex items-start gap-2 bg-transparent border-y border-slate-500 p-3">
      <div
        className="w-12 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/profile");
        }}
      >
        <img className="rounded-full" src={profileImg} alt={username} />
      </div>
      <div className="flex flex-col grow gap-2">
        <textarea
          ref={inputRef}
          className="resize-none m-0 h-24 p-1.5 bg-transparent text-xs sm:text-sm text-white font-normal"
          placeholder={placeholder}
          maxLength="280"
          value={contentText}
          onChange={(e) => setContentText(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-xl text-white">
            <BiImage
              className="cursor-pointer"
              onClick={() => toast.info("Feature yet to be implemented!")}
            />
            <MdGif
              className="cursor-pointer text-3xl"
              onClick={() => toast.info("Feature yet to be implemented!")}
            />
            <FaRegLaughBeam
              className="cursor-pointer text-lg"
              onClick={() => toast.info("Feature yet to be implemented!")}
            />
          </span>
          <button
            className="basis-20 text-sm sm:text-base bg-blue-500 hover:bg-blue-600 sm:ease-linear sm:duration-100 flex justify-center text-white p-1.5 px-2 font-robotoFlex rounded-r-2xl rounded-l-2xl"
            onClick={callbackExecutionHandler}
          >
            {saving ? <RiLoaderFill className="text-xl animate-spin" /> : text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
