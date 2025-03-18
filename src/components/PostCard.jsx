import "../assets/css/PostCard.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { handleLike, handleSave, handleDelete } from "../utils/utils";
import FormUpdatePost from "./FormUpdatePost";

function PostCard({ date, content, like, id, isSaved }) {
  const [isOpen, setIsOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(like);
  const [isShowSaved, setIsShowSaved] = useState(isSaved);
  const [showContent, setShowContent] = useState(content);
  const [edit, setEdit] = useState(null);
  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="post-card-container">
      {/* Info Sender */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="info-sender">
          <img src="/female-ava.png" alt="ava" className="avatar" />
          <div className="profile-label">
            <p id="name-post">Kevin Andreas</p>
            <p id="date">{date}</p>
          </div>
        </div>

        {/* Button */}
        <div className="btn-option-container">
          {/* Button Open */}
          <HiOutlineDotsHorizontal
            className="btn-option"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <div className="dropdown-container" ref={divRef}>
              <div className="dropdown-item" onClick={() => setEdit(id, showContent)}>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <MdModeEditOutline /> Edit
                </span>
              </div>
              <div className="dropdown-item" onClick={() => handleDelete(id)}>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <MdDeleteOutline /> Delete
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <p className="content">{showContent}</p>

      {/* Button Group */}
      <div className="btn-group-container">
        <button
          className="btn-group"
          onClick={(e) => handleLike(e, id, setLikeCount, likeCount)}
        >
          {likeCount > 0 ? <BiSolidLike className="icon-post" /> : <BiLike className="icon-post" />}
          <p>{likeCount} Like</p>
        </button>
        <button
          className="btn-group"
          onClick={(e) => handleSave(e, id, setIsShowSaved, isShowSaved)}
        >
          {isShowSaved ? <IoBookmark className="icon-post" /> : <IoBookmarkOutline className="icon-post" />}
          {isShowSaved ? <p>Bookmarked</p> : <p>Bookmark</p>}
        </button>
      </div>

      {/* Edit Section */}
      {edit && <FormUpdatePost handleClose={() => setEdit(null)} data={content} id={id} handleUpdate={setShowContent} />}  
    </div>
  );
}

export default PostCard;
