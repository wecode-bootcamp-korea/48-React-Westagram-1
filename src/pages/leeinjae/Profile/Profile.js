import React from "react";
import Navbar from "../../../components/Nav/Navbar";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="profileBox">
          <div className="sidebar"></div>
          <div className="profileDescription"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
