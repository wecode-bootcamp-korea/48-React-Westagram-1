import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 안병우의 컴포넌트
import MainAn from "./pages/anbyungwoo/Main/Main";
import LoginAn from "./pages/anbyungwoo/Login/Login";

// 이인재의 컴포넌트
import MainLee from "./pages/leeinjae/Main/M의ain";
import LoginLee from "./pages/leeinjae/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/an-main" element={<MainAn />} />
        <Route path="/an-login" element={<LoginAn />} />
        <Route path="/lee-main" element={<MainLee />} />
        <Route path="/lee-login" element={<LoginLee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
