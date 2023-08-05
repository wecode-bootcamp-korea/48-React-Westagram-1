import React from "react";
import "./Login.scss";
import "../../../style/reset.scss";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <h1 className="title_hd">로그인페이지</h1>
       <div className="login_content">
        <div className="login_logo">
          <p className="login_font logo_font">westagram</p>
        </div>
        <div className="login_inputWrap">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" placeholder="비밀번호"></input>
          <Link className="login_link" to='/kim-main'><button>로그인</button></Link>
        </div>
        <div className="login_lost link">
          <Link to='#!'><p>비밀번호를 잊으셨나요?</p></Link>
        </div>
       </div>
    </div>
  );
};

export default Login;
