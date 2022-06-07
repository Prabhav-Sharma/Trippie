import reactDom from "react-dom";
import { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineFileUpload, GrClose, BiLoaderAlt } from "../Utils/icons";
import { editModalReducer } from "../Utils/helpers";
import { TextInput } from ".";
import { editUserDetails } from "../services/usersAPI";
import {
  FULL_NAME_ACTION,
  PORTFOLIO_ACTION,
  ABOUT_ACTION,
  PROFILE_IMG_ACTION,
} from "../Utils/constants";

function ProfileEditModal({ showState }) {
  const { showEditModal, setShowEditModal } = showState;
  const authUser = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [editState, editDispatch] = useReducer(editModalReducer, {
    fullName: authUser.fullName,
    profileImg: authUser.profileImg,
    portfolio: authUser.portfolio,
    about: authUser.about,
  });

  if (!showEditModal) return null;

  const { fullName, profileImg, portfolio, about } = editState;

  const encodeImageFileAsURL = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      editDispatch({ type: PROFILE_IMG_ACTION, payload: dataUrl });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const saveChangesHandler = async () => {
    setLoading(true);
    const status = await editUserDetails(
      { ...authUser, ...editState },
      token,
      dispatch
    );
    setLoading(false);
    status === "SUCCESS" && setShowEditModal(false);
  };
  return reactDom.createPortal(
    <div
      className="w-full h-full absolute top-0 m-0 flex justify-center items-center bg-black bg-opacity-30 z-20"
      onClick={() => setShowEditModal(false)}
    >
      <div
        className="bg-gray-800 relative text-sm sm:text-base border-white self-center h-max w-72 sm:w-80 md:w-96 opacity-100 flex flex-col border-2 rounded-lg p-2 gap-3 pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="p-1 rounded-full bg-gray-200">
              <img
                src={profileImg}
                alt={fullName}
                className="w-full profile-large object-cover"
              />
            </div>
            <label className="bg-blue-500 w-max p-1.5 cursor-pointer sm:hover:ease-linear hover:bg-blue-600 sm:duration-100 text-white flex flex-row gap-1 items-center text-sm rounded-md">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                onChange={encodeImageFileAsURL}
              />
              Upload <MdOutlineFileUpload className="text-lg" />
            </label>
          </div>
          <TextInput
            legend="Name:"
            textColor="text-white"
            styles="text-black"
            maxLength="24"
            value={fullName}
            onChange={(e) =>
              editDispatch({ type: FULL_NAME_ACTION, payload: e.target.value })
            }
          />
        </div>
        <span className="text-white">
          About:
          <textarea
            className="resize-none m-0 h-24 p-1.5 bg-transparent text-xs sm:text-sm text-white font-normal"
            placeholder="Tell us about you!"
            maxLength="160"
            value={about}
            onChange={(e) =>
              editDispatch({ type: ABOUT_ACTION, payload: e.target.value })
            }
          />
        </span>
        <TextInput
          value={portfolio}
          onChange={(e) =>
            editDispatch({ type: PORTFOLIO_ACTION, payload: e.target.value })
          }
          legend="Portfolio Link:"
          textColor="text-white"
          styles="text-blue-600"
        />
        <button
          className="p-1.5 flex font-robotoFlex justify-center self-center font-normal w-11/12 md:text-lg mt-1 rounded-md mx-1 bg-blue-500 text-white hover:bg-blue-600"
          onClick={saveChangesHandler}
        >
          {loading ? <BiLoaderAlt className="animate-spin text-lg" /> : "Save"}
        </button>
        <GrClose
          onClick={() => setShowEditModal(false)}
          className="text-2xl bg-white rounded-3xl md:text-3xl -top-3 -right-3 p-1 text-cyan-400 absolute cursor-pointer"
        />
      </div>
    </div>,
    document.getElementById("root")
  );
}

export default ProfileEditModal;
