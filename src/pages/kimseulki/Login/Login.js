import React, { useState } from "react";
import "./Login.scss";
import "../../../style/reset.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [isValid, setIsValid] = useState(false);

  //const [id, setId] = useState('');
  //const [pw, setPw] = useState('');

  /*const saveUserId = (event) => {
    setId(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };
  */

  /*
  const loginValidation = () => {
    return id.includes("@") && pw.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };
*/

  const [userInfo, setUserInfo] = useState({
    userId: "아이디",
    userPw: "패스워드"
  });

  const saveUserInfo = (event) => {
    const {value, id} = event.target;

    setUserInfo({ ...userInfo, [id]: value});
  };

  const loginValidation = () => {
    return userInfo.userId.includes("@") &&  userInfo.userPw.length >= 5 ? setIsValid(true)
    : setIsValid(false);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    if(loginValidation()) {
      navigate('/kim-main');
    } else {
      alert("입력한 값을 확인해주세요.");
    }
  };

  return (
    <div className="login">
      <h1 className="title_hd">로그인페이지</h1>
       <div className="login_content">
        <div className="login_logo">
          <p className="login_font logo_font">westagram</p>
        </div>
        <form className="login_inputWrap">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="userId"
            onChange={saveUserInfo} onKeyUp={loginValidation}/>
          <input type="password" placeholder="비밀번호" id="userPw"
            onChange={saveUserInfo} onKeyUp={loginValidation}></input>
          <button className={isValid? "login_link valid_btn" : "login_link login_btn"} onClick={goToMain} disabled={!isValid ? true : false}>로그인</button>
        </form>
        <div className="login_lost link">
          <Link to='#!'><p>비밀번호를 잊으셨나요?</p></Link>
        </div>
       </div>
    </div>
  );
};

export default Login;
