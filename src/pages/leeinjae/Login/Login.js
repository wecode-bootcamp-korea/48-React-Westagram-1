import React, { useState } from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [changeId, setChangeId] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const navigate = useNavigate();

  const saveUserId = (e) => {
    setChangeId(e.target.value);
  };

  const saveUserPassword = (e) => {
    setChangePassword(e.target.value);
  };

  const goToMain = () => {
    navigate("/lee-main");
  };

  return (
    <div className="container">
      <div className="login">
        <div className="title">westagram</div>
        <div className="form">
          <input
            onChange={saveUserId}
            value={changeId}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input
            onChange={saveUserPassword}
            value={changePassword}
            type="password"
            placeholder="비밀번호"
          ></input>
        </div>
        <div className="loginButton">
          {/* <Link to='/main'>로그인</Link> */}
          <button onClick={goToMain}>로그인</button>
        </div>

        <a className="forgot" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
