import React from "react";
import "../../Main.scss";

const Comment = ({ newComment }) => {
  return (
    <li className="commentBox">
      <p className="commentsUser">miracle</p>
      <p className="commentsContent">{newComment}</p>
      <p className="contentsTime">42분 전</p>
      <button>
        <img
          className="commentsHeart"
          src="/images/김슬기/main_icon_heart.png"
        />
      </button>
    </li>
  );
};
export default Comment;
