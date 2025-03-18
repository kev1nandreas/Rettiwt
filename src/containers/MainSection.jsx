import "../assets/css/MainSection.css";
import { IoMdSend } from "react-icons/io";
import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";
import { handleSubmit } from "../utils/utils";

function MainSection() {
  const [data, setData] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const path = params.get("path");

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="main-section">
      {/* What do you think */}
      <div className="wdyt-container">
        <h4 className="wdyt-title">Post Something</h4>
        <div className="wdyt-input">
          <img src="/female-ava.png" alt="profile" className="avatar" />

          {/* Send Data Short */}
          <form
            action=""
            className="wdyt-form"
            onSubmit={(e) => handleSubmit(e, data, setData)}
          >
            <input
              name="content"
              type="text"
              placeholder="What do you think?"
              autoComplete="off"
            />
            <button type="submit">
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>

      {/* Post */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {path === "bookmarked"
          ? data.filter((item) => item.isSaved).map((item) => (
              <PostCard
                key={item.id}
                content={item.content}
                date={item.date}
                like={item.like}
                id={item.id}
                isSaved={item.isSaved}
              />
            ))
          : data.map((item) => (
              <PostCard
                key={item.id}
                content={item.content}
                date={item.date}
                like={item.like}
                id={item.id}
                isSaved={item.isSaved}
              />
            ))}
      </div>
    </div>
  );
}

export default MainSection;
