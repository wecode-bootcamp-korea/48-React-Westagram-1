import React from "react";
import "./Profile.scss";
import Navbar from "../../../components/이인재/Navbar";

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
