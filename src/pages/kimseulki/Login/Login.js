import React, { useState } from "react";
import "../../../style/common.scss"
import "./Login.scss";
import "../../../style/reset.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

  const Login = () => {

  const [userInfo, setUserInfo] = useState({
    userId: "아이디",
    userPw: "패스워드"
  });

  const handleInput = (event) => {
    const {value, id} = event.target;
    setUserInfo({ ...userInfo, [id]: value});
  }

  const loginValidation =
    userInfo.userId.includes("@") &&  userInfo.userPw.length >= 5 ? true : false;

  const navigate = useNavigate(); 

  const goToMain = () => {
    if(loginValidation === true) {
      navigate('/kim-main');
    } else {
      alert("입력한 값을 확인해주세요.");
    }
  };

  return (
    <div className="login">
      <h1 className="titleHd">로그인페이지</h1>
       <div className="loginContent">
        <div className="loginLogo">
          <p className="loginFont logoFont">westagram</p>
        </div>
        <form className="loginInputWrap">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="userId"
            onChange={handleInput}/>
          <input type="password" placeholder="비밀번호" id="userPw"
            onChange={handleInput}/>
          <button className={loginValidation? "loginLink validBtn" : "loginLink loginBtn"} onClick={goToMain}>로그인</button>
        </form>
        <div className="loginLost link">
          <Link to='#!'><p>비밀번호를 잊으셨나요?</p></Link>
        </div>
       </div>
    </div>
  );
};

export default Login;
