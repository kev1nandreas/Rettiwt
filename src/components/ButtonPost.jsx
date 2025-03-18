import { FaPlus } from "react-icons/fa";
import "../assets/css/ButtonPost.css";
import { useState } from "react";
import FormNewPost from "./FormNewPost";

function ButtonPost() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <>
      <button
        className="btn-post"
        onClick={(e) => {
          e.preventDefault();
          setIsAddOpen(!isAddOpen);
        }}
      >
        <FaPlus />
        New Post
      </button>

      {isAddOpen && (
        <FormNewPost handleClose={() => setIsAddOpen(false)} />
      )}
    </>
  );
}

export default ButtonPost;
