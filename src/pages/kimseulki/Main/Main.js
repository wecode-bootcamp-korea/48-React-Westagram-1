import React, { useState } from "react";
import "./Main.scss";
import "../../../style/reset.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Main = () => {

  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const commentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() === '') {
      return;
    } 
    setCommentList([...commentList, newComment]);
    setNewComment('');
  };

  const commentInput = (event) =>  {
    setNewComment(event.target.value);
  }

  const navigate = useNavigate();

  const goToLogin = () => {                                    
    navigate('/kim-login');
  };

  return (
    <div className="main">
      <h1>메인페이지</h1>
      <nav>
        <ul>
          <li>
            <Link to='#!'><img className="main_icon_logo" src="images/김슬기/main_icon_logo.png"/></Link>
          </li>
          <li className="main_logo_div"></li>
          <li className="main_logo_font"> 
            <Link to='#!'><p className="logo_font">westagram</p></Link>
          </li>
          <li className="main_nav_search">
            <img className="main_icon_search" src="images/김슬기/main_icon_search.png"></img>
            <input type="text" id="search" name="search" placeholder="검색"/>
          </li>
          <li>
            <Link to='#!'><img className="main_icon_compass" src="images/김슬기/main_icon_compass.png"></img></Link>
          </li>
          <li>
            <Link to='#!'><img className="main_icon_heart" src="images/김슬기/main_icon_heart.png"></img></Link>
          </li>
          <li>
            <img className="main_icon_login" onClick={goToLogin} src="images/김슬기/main_icon_login.png"></img>
          </li>
        </ul>
      </nav>
      <div className="main_content">
        <div className="feeds">
          <article> 
            <div className="follow_info">
              <Link to='#!'><img className="main_follow_info_user" src="images/김슬기/main_follow_info_user.png" /></Link>
              <p className="main_follow_info_id">kimseulki_l</p>
              <Link to='#!'><img className="main_follow_info_menu" src="images/김슬기/main_icon_menu.png" /></Link>
            </div>
            <ul className="follow_post">
              <li>
                  <img className="follow_post_img" src="images/김슬기/main_follow_post.jpeg" alt="post"/>
              </li>
            </ul>
            <div className="images_post">
              <div className="keep_imgs">
                <Link to='#!'><img className="main_icon_keep_heart" src="images/김슬기/main_icon_keep_heart.png"/></Link>
                <Link to='#!'><img className="main_icon_keep_chat" src="images/김슬기/main_icon_chat.png"/></Link>
                <Link to='#!'><img className="main_icon_keep_upload" src="images/김슬기/main_icon_upload.png"/></Link>
                <Link to='#!'><img className="main_icon_keep" src="images/김슬기/main_icon_keep.png"/></Link>
              </div>
              <div className="love_counts">
                <Link to='#!'><img className="user_push_love_id" src="images/김슬기/main_follow_info_user.png"/></Link>
                <div className="user_push_loves"><Link to='#!'><strong>anieworld님</strong></Link> <strong>외 10명</strong>이 좋아합니다</div>
              </div>
              <div className="img_content">
                <Link to='#!'><p className="user_id">kimseulki_l</p></Link>
                <p className="img_comment">시애틀 또 가고 싶다...<Link to='#!'><p>더 보기</p></Link></p>
              </div>

              <div className="comments_show">
                <ul>
                  {commentList.map((newComment, index) => (
                    <li className="commentBox" key={index}>
                      <p className="comments_user">miracle</p>
                      <p className="comments_content">{newComment}</p>
                    <button><img className="comments_heart" src="/images/김슬기/main_icon_heart.png"/></button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contents_time">
                <p>42분 전</p>
              </div>

            </div>  
            <form className="comments">
            <input className="comments_input" required type="text" placeholder="댓글 달기..."/>
            <button className="comments_btn" type="submit" value={newComment} onChange={commentInput}>게시</button>
            </form>
          </article>
        </div>
        <div className="main-right">
          <div className="user_info">
            <Link to='#!'><img className="main_user_wecode" src="/images/김슬기/main_user_wecode.png"/></Link>
            <Link to='#!'><p className="main_user_id">wecode_bootcamp</p></Link>
            <Link to='#!'><p className="main_user_name">WeCode | 위코드</p></Link>
          </div>
          <div className="story_info">
            <div className="story_hd">
              <p className="story_info_left">스토리</p>
              <Link to='#!'><p className="story_info_right">모두 보기</p></Link>
            </div>
            <ul>
              <li><Link to='#!'><img className="follow_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <Link to='#!'><p className="follow_user_id"> dPtnsla_t</p></Link>
              <p className="follow_user_story_time">16분 전</p>
              </li>
              <li><Link to='#!'><img className="follow_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <Link to='#!'><p className="follow_user_id"> rlaehdwns_h</p></Link>
              <p className="follow_user_story_time">50분 전</p>
              </li>
              <li><Link to='#!'><img className="follow_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <Link to='#!'><p className="follow_user_id"> rkwhr_l</p></Link>
              <p className="follow_user_story_time">2시간 전</p>
              </li>
              <li><Link to='#!'><img className="follow_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <Link to='#!'><p className="follow_user_id"> gksksla_m</p></Link>
              <p className="follow_user_story_time">3시간 전</p>
              </li>
            </ul>  
          </div>
          <div className="recd">
            <div className="recd_hd">
            <p className="recd_hd_left">회원님을 위한 추천</p>
            <p className="recd_hd_right">모두 보기</p>
            </div>
            <ul>
              <li><Link to='#!'><img className="recd_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <p className="recd_id">tjdfudsla_w</p>
              <p className="recd_follow">팔로우</p>
              <p className="recd_cm">rlaehdwns_h님 외 3명...</p>
              </li>
              <li><Link to='#!'><img className="recd_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <p className="recd_id">rladudvusdlq_s</p>
              <p className="recd_follow">팔로우</p>
              <p className="recd_cm">rlaehdwns_h님 외 3명...</p>
              </li>
              <li><Link to='#!'><img className="recd_user" src="/images/김슬기/main_follow_info_user.png"/></Link>
              <p className="recd_id">wkdgksquf_f</p>
              <p className="recd_follow">팔로우</p>
              <p className="recd_cm">rlaehdwns_h님 외 3명...</p>
              </li>
            </ul>  
          </div>
          <div className="com_info">
            <p>westagram 정보·지원·홍보 센터·API·</p>
            <p> 채용 정보·개인정보처리방침·약관·</p> <p>디렉터리·프로필·해시태그·언어</p>
            <p className="com_name">&#169;2023 WESTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
