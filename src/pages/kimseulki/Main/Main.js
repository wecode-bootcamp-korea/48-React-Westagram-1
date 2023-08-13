import React, { useState } from "react";
import "../../../style/common.scss";
import "./Main.scss";
import "../../../style/reset.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import INFO_LIST from "./components/infoList";
import Comment from "./components/Comment/CommentBox";
import Feeds from "./components/Feeds/Feeds";

const Main = () => {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() === "") {
      return;
    }
    setCommentList([...commentList, newComment]);
    setNewComment("");
  };

  const newCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/kim-login");
  };

  return (
    <div className="main">
      <h1>메인페이지</h1>
      <nav>
        <ul>
          <li>
            <Link to="#!">
              <img
                className="mainIconLogo"
                src="images/김슬기/main_icon_logo.png"
              />
            </Link>
          </li>
          <li className="mainLogoDiv"></li>
          <li className="mainLogoFont">
            <Link to="#!">
              <p className="logoFont">westagram</p>
            </Link>
          </li>
          <li className="mainNavSearch">
            <img
              className="mainIconSearch"
              src="images/김슬기/main_icon_search.png"
            ></img>
            <input type="text" id="search" name="search" placeholder="검색" />
          </li>
          <li>
            <Link to="#!">
              <img
                className="mainIconCompass"
                src="images/김슬기/main_icon_compass.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                className="mainIconHeart"
                src="images/김슬기/main_icon_heart.png"
              ></img>
            </Link>
          </li>
          <li>
            <img
              className="mainIconLogin"
              onClick={goToLogin}
              src="images/김슬기/main_icon_login.png"
            ></img>
          </li>
        </ul>
      </nav>
      <div className="mainContent">
        <div className="feeds">
          <article>
            <div className="followInfo">
              <Link to="#!">
                <img
                  className="mainFollowInfoUser"
                  src="images/김슬기/main_follow_info_user.png"
                />
              </Link>
              <Link to="#!">
                <p className="mainFollowInfoId">kimseulki_l</p>
              </Link>
              <img
                className="mainFollowInfoMenu"
                src="images/김슬기/main_icon_menu.png"
              />
            </div>
            <ul className="followPost">
              <li>
                <img
                  className="followPostImg"
                  src="images/김슬기/main_follow_post.jpeg"
                  alt="post"
                />
              </li>
            </ul>
            <div className="imagesPost">
              <div className="keepImgs">
                <img
                  className="mainIconKeepHeart"
                  src="images/김슬기/main_icon_keep_heart.png"
                />
                <img
                  className="mainIconKeepChat"
                  src="images/김슬기/main_icon_chat.png"
                />
                <img
                  className="mainIconKeepUpload"
                  src="images/김슬기/main_icon_upload.png"
                />
                <img
                  className="mainIconKeep"
                  src="images/김슬기/main_icon_keep.png"
                />
              </div>
              <div className="loveCounts">
                <Link to="#!">
                  <img
                    className="userPushLoveId"
                    src="images/김슬기/main_follow_info_user.png"
                  />
                </Link>
                <div className="userPushLoves">
                  <Link to="#!">
                    <strong>anieworld님</strong>
                  </Link>{" "}
                  <strong>외 10명</strong>이 좋아합니다
                </div>
              </div>
              <div className="imgContent">
                <Link to="#!">
                  <p className="userId">kimseulki_l</p>
                </Link>
                <p className="imgComment">
                  시애틀 또 가고 싶다...<p>더 보기</p>
                </p>
              </div>

              <div className="commentsShow">
                <ul>
                  {commentList.map((newComment, index) => (
                    <Comment newComment={newComment} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            <form className="comments" onSubmit={handleCommentSubmit}>
              <input
                className="commentsInput"
                required
                type="text"
                placeholder="댓글 달기..."
                value={newComment}
                onChange={newCommentInput}
              />
              <button className="commentsBtn" type="submit">
                게시
              </button>
            </form>
          </article>
        </div>
        <div className="mainRight">
          <div className="userInfo">
            <Link to="#!">
              <img
                className="mainUserWecode"
                src="/images/김슬기/main_user_wecode.png"
              />
            </Link>
            <Link to="#!">
              <p className="mainUserId">wecode_bootcamp</p>
              <p className="mainUserName">WeCode | 위코드</p>
            </Link>
          </div>
          <div className="storyInfo">
            <div className="storyHd">
              <p className="storyInfoLeft">스토리</p>
              <p className="storyInfoRight">모두 보기</p>
            </div>
            <ul>
              <li>
                <img
                  className="followUser"
                  src="/images/김슬기/main_follow_info_user.png"
                />
                <Link to="#!">
                  <p className="followUserId"> dPtnsla_t</p>
                </Link>
                <p className="followUserStoryTime">16분 전</p>
              </li>
              <li>
                <img
                  className="followUser"
                  src="/images/김슬기/main_follow_info_user.png"
                />
                <Link to="#!">
                  <p className="followUserId"> rlaehdwns_h</p>
                </Link>
                <p className="followUserStoryTime">50분 전</p>
              </li>
              <li>
                <img
                  className="followUser"
                  src="/images/김슬기/main_follow_info_user.png"
                />
                <Link to="#!">
                  <p className="followUserId"> rkwhr_l</p>
                </Link>
                <p className="followUserStoryTime">2시간 전</p>
              </li>
              <li>
                <img
                  className="followUser"
                  src="/images/김슬기/main_follow_info_user.png"
                />
                <Link to="#!">
                  <p className="followUserId"> gksksla_m</p>
                </Link>
                <p className="followUserStoryTime">3시간 전</p>
              </li>
            </ul>
          </div>
          <div className="recd">
            <div className="recdHd">
              <p className="recdHdLeft">회원님을 위한 추천</p>
              <p className="recdHdRight">모두 보기</p>
            </div>
            <ul>
              <li>
                <Link to="#!">
                  <img
                    className="recdUser"
                    src="/images/김슬기/main_follow_info_user.png"
                  />
                </Link>
                <Link to="#!">
                  <p className="recdId">tjdfudsla_w</p>
                </Link>
                <p className="recdFollow">팔로우</p>
                <p className="recdCm">rlaehdwns_h님 외 3명...</p>
              </li>
              <li>
                <Link to="#!">
                  <img
                    className="recdUser"
                    src="/images/김슬기/main_follow_info_user.png"
                  />
                </Link>
                <Link to="#!">
                  <p className="recdId">rladudvusdlq_s</p>
                </Link>
                <p className="recdFollow">팔로우</p>
                <p className="recdCm">rlaehdwns_h님 외 3명...</p>
              </li>
              <li>
                <Link to="#!">
                  <img
                    className="recdUser"
                    src="/images/김슬기/main_follow_info_user.png"
                  />
                </Link>
                <Link to="#!">
                  <p className="recdId">wkdgksquf_f</p>
                </Link>
                <p className="recdFollow">팔로우</p>
                <p className="recdCm">rlaehdwns_h님 외 3명...</p>
              </li>
            </ul>
          </div>
          <footer className="comInfo">
            {INFO_LIST.map((info) => {
              return (
                <ul>
                  <li key={info.id} className="moreInfo">
                    <a href={info.link}>{info.content}</a>
                  </li>
                </ul>
              );
            })}
            <p className="comName">&#169;2023 WESTAGRAM</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
