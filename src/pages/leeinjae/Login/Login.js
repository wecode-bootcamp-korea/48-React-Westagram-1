import React, { useState } from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
    const idValidate = e.target.value;

    setIsValid(idValidate);

    idValidate.includes("@") && password.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
    console.log(idValidate);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    const passwordValidate = e.target.value;

    setIsValid(passwordValidate);

    id.includes("@") && passwordValidate.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
    console.log(passwordValidate);
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
            onChange={handleId}
            value={id}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="loginButton">
          <button
            style={{
              backgroundColor: isValid
                ? "rgb(179, 219, 255)"
                : "rgb(225, 238, 250)",
            }}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>

        <a className="forgot" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
