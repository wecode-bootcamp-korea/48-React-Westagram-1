import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Search from "../../pages/leeinjae/Main/components/Search";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/lee-main/profile");
  };

  const goToHome = () => {
    navigate("/lee-main");
  };

  return (
    <nav className="header">
      <div className="headerContent">
        <div className="logoBox">
          <div className="instagramLogo">
            <BsInstagram size={25} onClick={goToHome} />
          </div>
          <div className="divider"></div>
          <a className="title" href="/lee-main">
            westagram
          </a>
        </div>
        <Search />
        <div className="userMenu">
          <AiOutlineCompass size={30} />
          <AiOutlineHeart size={30} />
          <AiOutlineUser size={30} onClick={goToProfile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
