import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  // useState는 클로저 개념이라 다른 곳에 값을 저장해두고 그것을 가져오는(hooking)하는 느낌
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { value, name } = e.target;
    // name === userId, userPassword가 될 수 있는데 상황마다 접근해야 하는 게 다름
    // 그럴 때 [] 표기법을 사용해 (객체일 때)
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid =
    userInfo.userId.includes("@") && userInfo.userPassword.length >= 5;

  const goToMain = () => {
    navigate("/lee-main");

    // fetch("http://10.58.52.80:3000/users/login  ", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     email: userInfo.userId,
    //     password: userInfo.userPassword,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    //     if (data.accessToken) {
    //       localStorage.setItem("token", data.accessToken);
    //       navigate("/lee-main");
    //     }

    //     if (data.message === "specified user does not exist") {
    //       alert("존재하지 않는 아이디입니다");
    //     }

    //     if (data.message === "invalid password") {
    //       alert("비밀번호가 다릅니다.");
    //     }
    //   });
  };

  return (
    <div className="container">
      <div className="login">
        <div className="title">westagram</div>
        <div className="form">
          <input
            onChange={handleInput}
            name="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handleInput}
            name="userPassword"
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={isValid ? "activeButton" : "inActiveButton"}
            onClick={goToMain}
            disabled={!isValid}
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
