import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat, BsBookmark } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import FeedItem from "./FeedItem";

const Feed = () => {
  const [state, setState] = useState(false);
  let [show, setShow] = useState(false);

  const handleHeartChange = () => {
    setState(!state);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <article>
      <div className="writer">
        <div className="userBox">
          <img
            className="userProfile"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhIYEhQVFAEDBAQCAgIJAgIJCAICAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/8AAEQgALAAsAwERAAIRAQMRAf/EABoAAQEAAgMAAAAAAAAAAAAAAAADBAYHCAn/xAAyEAABAwMCAgcGBwAAAAAAAAACAQMEAAUGERIHFBMxNFNykrEIFRYXIUEJIiMyM0JR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APLSVLfSU9+s5+9f7L/tBLm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0CX2p7xl60EqBQKBQKDljhDwAunHZvKAx6e2zfLQnMpDmxngiPMbHSNSmoKsxiRWxROZJpst38iKmihzbiP4dUzM7FY75Fz2FCtF4dhLHfnwkbIY82I2UN8xF4tEOc4sAkRV2m2RJuTQVDGzz2HMcwHGH8xk8QrhdcOj6xHSs1ljzbik3pwYQUaamqz0W8l3ET4kJIjahuISUIx/YWgXC8X6yRMyvC3fGYMa8XsH8Z2gsJ+EUsBhbZJLIk7R2oyaNIZb9pqjakQbbbPYNwvPMJ4e5FaM4l4zbMkiMQ4Tl8t7LM2dPeuE8QJ2O5MRBDoWmABI5Ok7tIxb11Eg6RTYqwpj8dXGnlZcJtXGTQwLRdNRJOtF+y/egzHr5cWIU60tz5TdqkSUkPQReJGHHA3IBkGu1SFCJEVU1TcunXQVTMb8lmK0e+7j7qKOMQoHNudArIvE+LSt67diPGbqDpohkRdaqtBsHzz4kfFA5L8wcq+IhicgN399SebSNu3dCj2/f0e767NdNfrpQYkri5nU6FaYcnNMhkRLTLSfbmHbq+TcKShKSPMip6NuISqu8dF1VV1oM97j5xOkzJ0t7iNlrsudFSFLfO+SlORHRTJGXCU9SBFdcXauqauF9PzLQaJQVl9qe8ZetBKgUCgUCgrL7U94y9aCVAoFAoFB//Z"
            alt="프로필 아이콘"
          />
          <p>cannon_mj</p>
        </div>
        <img
          className="menuButton"
          src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
          alt="메뉴 버튼 아이콘"
        />
      </div>
      <div className="feedImageBox">
        <img
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="피드 이미지"
        />
      </div>

      <div className="feedContent">
        <div className="feedTextBox">
          <div className="feedContentImageBox">
            <div className="img-left">
              <div onClick={handleHeartChange} className="heart">
                {state ? (
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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhIYEhQVFAEDBAQCAgIJAgIJCAICAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/8AAEQgALAAsAwERAAIRAQMRAf/EABoAAQEAAgMAAAAAAAAAAAAAAAADBAYHCAn/xAAyEAABAwMCAgcGBwAAAAAAAAACAQMEAAUGERIHFBMxNFNykrEIFRYXIUEJIiMyM0JR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APLSVLfSU9+s5+9f7L/tBLm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0CX2p7xl60EqBQKBQKDljhDwAunHZvKAx6e2zfLQnMpDmxngiPMbHSNSmoKsxiRWxROZJpst38iKmihzbiP4dUzM7FY75Fz2FCtF4dhLHfnwkbIY82I2UN8xF4tEOc4sAkRV2m2RJuTQVDGzz2HMcwHGH8xk8QrhdcOj6xHSs1ljzbik3pwYQUaamqz0W8l3ET4kJIjahuISUIx/YWgXC8X6yRMyvC3fGYMa8XsH8Z2gsJ+EUsBhbZJLIk7R2oyaNIZb9pqjakQbbbPYNwvPMJ4e5FaM4l4zbMkiMQ4Tl8t7LM2dPeuE8QJ2O5MRBDoWmABI5Ok7tIxb11Eg6RTYqwpj8dXGnlZcJtXGTQwLRdNRJOtF+y/egzHr5cWIU60tz5TdqkSUkPQReJGHHA3IBkGu1SFCJEVU1TcunXQVTMb8lmK0e+7j7qKOMQoHNudArIvE+LSt67diPGbqDpohkRdaqtBsHzz4kfFA5L8wcq+IhicgN399SebSNu3dCj2/f0e767NdNfrpQYkri5nU6FaYcnNMhkRLTLSfbmHbq+TcKShKSPMip6NuISqu8dF1VV1oM97j5xOkzJ0t7iNlrsudFSFLfO+SlORHRTJGXCU9SBFdcXauqauF9PzLQaJQVl9qe8ZetBKgUCgUCgrL7U94y9aCVAoFAoFB//Z"
              alt="프로필 이미지"
            />
            <p>
              <b>aineworld</b>님 외 <b>10</b>명이 좋아합니다
            </p>
          </div>
          <div className="descriptionContent">
            <div className="initialContent">
              <p>
                <b>cannon_mj</b> 위워크에서 진행한 베이킹 클래스..
              </p>
              <button className="more" onClick={handleShow}>
                {show ? "숨기기" : "더 보기"}
              </button>
            </div>
            {show && <FeedItem />}
          </div>
        </div>
      </div>

      <div className="comment">
        <input type="text" placeholder="댓글 달기..."></input>
        <button>게시</button>
      </div>
    </article>
  );
};

export default Feed;
