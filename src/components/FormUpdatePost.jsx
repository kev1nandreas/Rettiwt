import "../assets/css/FormNewPost.css";
import { IoMdSend } from "react-icons/io";
import { useEffect, useRef } from "react";
import { handleEdit } from "../utils/utils";

function FormUpdatePost({ handleClose, data, id, handleUpdate }) {
  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div className="layout-form">
      <div className="form-container" ref={divRef}>
        <h3 className="form-title">Post Something Here</h3>
        <div className="form-input">
          <form action="" onSubmit={(e) => handleEdit(e, handleClose, id, handleUpdate)}>
            <textarea
              className="input-form"
              name="content"
              id="content"
              placeholder="What do you think?"
              maxLength={1000}
              defaultValue={data}
            ></textarea>
            <div style={{ display: "flex", justifyContent: "flex-end", borderTop: "1px solid #ccc", padding: "10px 0" }}>
              <button type="submit" className="btn-send">
                <IoMdSend /> Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUpdatePost;
