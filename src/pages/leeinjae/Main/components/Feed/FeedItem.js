import React from "react";
import "./FeedItem.scss";

const FeedItem = ({ lists, comments }) => {
  console.log(lists);
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
        <li key={index} className="newCommentList">
          <img
            className="newCommentUserImg"
            src="https://ca.slack-edge.com/TH0U6FBTN-U05CNSZS4ET-02b82fbf4c55-512"
            alt="프로필 이미지"
          />
          <p>
            <b className="bold">이인재</b>
            {elements}
          </p>
        </li>
      ))}
    </>
  );
};

export default FeedItem;
