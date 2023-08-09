import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat, BsBookmark } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import FeedItem from "./FeedItem";
import "./Feed.scss";

const Feed = ({ username, profileImage, feedImage, feedsComment, likes }) => {
  const [heartChange, setHeartChange] = useState(false);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [feedComment, setFeedComment] = useState("");
  const [feedCommentList, setFeedCommentList] = useState([]);

  const onTextChange = (e) => {
    setFeedComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedComment === "") return;
    setFeedComment("");
    setFeedCommentList((cur) => [...cur, feedComment]);
  };

  const handleHeartChange = () => {
    setHeartChange(!heartChange);
  };

  const handleShow = () => {
    setShowMoreComments(!showMoreComments);
  };

  return (
    <article className="article">
      <div className="writer">
        <div className="userBox">
          <img className="userProfile" src={profileImage} alt="프로필 아이콘" />
          <p>{username}</p>
        </div>
        <img
          className="menuButton"
          src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
          alt="메뉴 버튼 아이콘"
        />
      </div>
      <div className="feedImageBox">
        <img src={feedImage} alt="피드 이미지" />
      </div>

      <div className="feedContent">
        <div className="feedTextBox">
          <div className="feedContentImageBox">
            <div className="img-left">
              <div onClick={handleHeartChange} className="heart">
                {heartChange ? (
                  <AiFillHeart size={25} color="red" />
                ) : (
                  <AiOutlineHeart size={25} />
                )}
              </div>
              <BsChat size={21} />
              <FiShare size={20} />
            </div>
            <div className="img-right">
              <BsBookmark size={20} />
            </div>
          </div>

          <div className="descriptionBox">
            <img
              className="descriptionProfile"
              src={profileImage}
              alt="프로필 이미지"
            />
            <p>
              <b className="bold">{username}</b>님 외 <b>{likes}</b>명이
              좋아합니다
            </p>
          </div>
          <div className="descriptionContent">
            <div className="initialContent">
              <p>
                <b className="bold">{username}</b> {feedsComment}
              </p>
              <button className="more" onClick={handleShow}>
                {showMoreComments ? "숨기기" : "더 보기"}
              </button>
            </div>
            <ul className="hideContent">
              {showMoreComments && <FeedItem lists={feedCommentList} />}
            </ul>
          </div>
        </div>
      </div>

      <form className="comment" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="댓글 달기..."
          value={feedComment}
          onChange={onTextChange}
        />
        <button>게시</button>
      </form>
    </article>
  );
};

export default Feed;
