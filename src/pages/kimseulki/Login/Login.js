import React, { useState } from "react";
import "./Login.scss";
import "../../../style/reset.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();


  const saveUserId = (event) => {
    setId(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };

  const loginValidation = () => {
    return id.includes("@") && pw.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const goToMain = () => {
    navigate('/kim-main')
  }

  return (
    <div className="login">
      <h1 className="title_hd">로그인페이지</h1>
       <div className="login_content">
        <div className="login_logo">
          <p className="login_font logo_font">westagram</p>
        </div>
        <div className="login_inputWrap">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="id"
            value={id} onChange={saveUserId} onKeyUp={loginValidation}/>
          <input type="password" placeholder="비밀번호" id="pw"
            value={pw} onChange={saveUserPw} onKeyUp={loginValidation}></input>
          <button className="login_link" onClick={goToMain} disabled={!isValid ? true : false} style={{ backgroundColor: isValid ? "#4ec5f4" : "#cde9f4" }}>로그인</button>
        </div>
        <div className="login_lost link">
          <Link to='#!'><p>비밀번호를 잊으셨나요?</p></Link>
        </div>
       </div>
    </div>
  );
};

export default Login;
