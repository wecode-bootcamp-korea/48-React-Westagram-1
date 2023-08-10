import React from "react";
import "./FeedItem.scss";

const FeedItem = ({ lists, comments }) => {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <li key={comment.commentId} className="commentList">
          <img
            className="commentUserImg"
            src={comment.userProfile}
            alt="프로필 이미지"
          />
          <p>
            <b className="bold">{comment.userName}</b> {comment.comment}
          </p>
        </li>
      ))}

      {lists.map((elements, index) => (
        <li key={index}>{elements}</li>
      ))}
    </>
  );
};

export default FeedItem;
