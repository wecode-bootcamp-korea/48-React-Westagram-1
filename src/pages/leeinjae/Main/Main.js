import React, { useEffect, useState } from "react";
import StoryUser from "./components/StoryUser";
import RecommendUser from "./components/RecommendUser";
import Feed from "./components/Feed/Feed";
import Navbar from "../../../components/Nav/Navbar";
import { WESTAGRAM_INFO } from "./infoList";
import "./Main.scss";

const Main = () => {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch("/data/feedData.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setFeedsData(data));
  }, []);

  return (
    <div className="main">
      <Navbar />
      <main>
        <div className="mainContentBox">
          <div className="feeds">
            {/* 데이터 생성하고, map 메서드로 각각의 값을 props로 받아 출력하도록 수정 */}
            {feedsData.map((feedData) => {
              // console.log(feedData);
              return (
                // feedData 전체를 props로 전달하고 댓글 리스트 관리하는 FeedItem에 comments 전체를 props로 전달
                <Feed
                  // key={feedData.id}
                  // userName={feedData.userName}
                  // profileImage={feedData.profileImage}
                  // feedImage={feedData.feedImage}
                  // feedsComment={feedData.feedComment}
                  // likes={feedData.likes}
                  // commentUserName={feedData.comments.map((el) => el.userName)}
                  data={feedData}
                />
              );
            })}
          </div>
          <div className="main-right">
            <div className="myProfile">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhIYEhQVFAEDBAQCAgIJAgIJCAICAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/8AAEQgALAAsAwERAAIRAQMRAf/EABoAAQEAAgMAAAAAAAAAAAAAAAADBAYHCAn/xAAyEAABAwMCAgcGBwAAAAAAAAACAQMEAAUGERIHFBMxNFNykrEIFRYXIUEJIiMyM0JR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APLSVLfSU9+s5+9f7L/tBLm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0Dm3++c8y0CX2p7xl60EqBQKBQKDljhDwAunHZvKAx6e2zfLQnMpDmxngiPMbHSNSmoKsxiRWxROZJpst38iKmihzbiP4dUzM7FY75Fz2FCtF4dhLHfnwkbIY82I2UN8xF4tEOc4sAkRV2m2RJuTQVDGzz2HMcwHGH8xk8QrhdcOj6xHSs1ljzbik3pwYQUaamqz0W8l3ET4kJIjahuISUIx/YWgXC8X6yRMyvC3fGYMa8XsH8Z2gsJ+EUsBhbZJLIk7R2oyaNIZb9pqjakQbbbPYNwvPMJ4e5FaM4l4zbMkiMQ4Tl8t7LM2dPeuE8QJ2O5MRBDoWmABI5Ok7tIxb11Eg6RTYqwpj8dXGnlZcJtXGTQwLRdNRJOtF+y/egzHr5cWIU60tz5TdqkSUkPQReJGHHA3IBkGu1SFCJEVU1TcunXQVTMb8lmK0e+7j7qKOMQoHNudArIvE+LSt67diPGbqDpohkRdaqtBsHzz4kfFA5L8wcq+IhicgN399SebSNu3dCj2/f0e767NdNfrpQYkri5nU6FaYcnNMhkRLTLSfbmHbq+TcKShKSPMip6NuISqu8dF1VV1oM97j5xOkzJ0t7iNlrsudFSFLfO+SlORHRTJGXCU9SBFdcXauqauF9PzLQaJQVl9qe8ZetBKgUCgUCgrL7U94y9aCVAoFAoFB//Z"
                alt="프로필"
              />
              <div className="myProfileText">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </div>

            <div className="story">
              <div className="storyHeader">
                <p className="storyTitle">스토리</p>
                <p className="all">모두 보기</p>
              </div>
              <div className="storyContent">
                <div className="storyUser">
                  <StoryUser />
                </div>
              </div>
            </div>

            <div className="recommend">
              <div className="recommendHeader">
                <p className="recommendTitle">회원님을 위한 추천</p>
                <p className="all">모두 보기</p>
              </div>
              <div className="recommendContent">
                <RecommendUser />
              </div>
            </div>

            <div className="info">
              {WESTAGRAM_INFO.map((el) => (
                <>
                  <a href="/" className="westagramInfo">
                    {el.title}
                  </a>
                  <span>·</span>
                </>
              ))}
              <p>© 2023 WESTAGRAM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
