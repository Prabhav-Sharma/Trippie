import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../hooks";
import { BiImage, FaRegLaughBeam, RiLoaderFill, GrClose } from "../Utils/icons";
import { FALLBACK_IMG } from "../Utils/constants";
import { toast } from "react-toastify";
import Picker from "emoji-picker-react";

function NewPost({
  text = "Post",
  initialContent = "",
  callback = () => "SUCCESS",
  placeholder = "What's on your mind?",
  focus = false,
  pathname = "",
  initialImage = "",
}) {
  const [contentText, setContentText] = useState(initialContent);
  const [contentImage, setContentImage] = useState(initialImage);
  const { toggle: showEmojiPicker, setToggle: setShowEmojiPicker } =
    useToggle(false);
  const { toggle: saving, setToggle: setSaving } = useToggle(false);
  const { profileImg, username, _id } = useSelector((state) => state.user);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const callbackExecutionHandler = async () => {
    if (contentText.trim().length === 0 && contentImage.length === 0) {
      toast.warn("We got nothing! Can't work with nothing!");
      return;
    }
    setSaving(true);
    const status = await callback({
      text: contentText.trim(),
      image: contentImage,
    });

    setSaving(false);
    if (status === "SUCCESS") {
      setContentText("");
      setContentImage("");
      pathname && navigate(pathname);
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    focus && inputRef.current.focus();
  }, []);

  const encodeImageFileAsURL = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      let dataUrl = reader.result;
      setContentImage(dataUrl);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="flex items-start gap-2 bg-transparent border-y border-slate-500 p-3">
      <div
        className="w-12 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/profile");
        }}
      >
        <img
          className="rounded-full"
          src={profileImg}
          alt={username}
          onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
        />
      </div>
      <div className="flex flex-col grow gap-2">
        <div className="flex flex-col gap-2">
          <textarea
            ref={inputRef}
            className="resize-none m-0 h-24 p-1.5 bg-transparent text-xs sm:text-sm text-white font-normal"
            placeholder={placeholder}
            maxLength="280"
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
          />
          {contentImage && (
            <div className="w-max relative">
              <img
                className="max-w-full max-h-72 self-center"
                src={contentImage}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <GrClose
                onClick={() => setContentImage("")}
                className="text-2xl bg-white rounded-3xl md:text-3xl -top-3 -right-3 p-1 text-cyan-400 absolute cursor-pointer"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-xl text-white">
            <label>
              <BiImage className="cursor-pointer" />
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                onChange={encodeImageFileAsURL}
              />
            </label>
            <span className="relative">
              <FaRegLaughBeam
                className="cursor-pointer text-lg "
                onClick={() => setShowEmojiPicker((toggle) => !toggle)}
              />
              <Picker
                pickerStyle={{
                  display: `${showEmojiPicker ? "block" : "none"}`,
                  position: "absolute",
                  top: "12px",
                  boxShadow: "none",
                  left: "-100px",
                  zIndex: "30",
                  MaxWidth: "95%",
                  transform: "scale(95%)",
                  border: "none",
                  color: "black",
                  searchPlaceholder: "Search",
                  overflow: "scroll",
                  fontSize: "0.75rem",
                }}
                onEmojiClick={(e, emojiObject) =>
                  setContentText((text) => text + emojiObject.emoji)
                }
              />
            </span>
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
