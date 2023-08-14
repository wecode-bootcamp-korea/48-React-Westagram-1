import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 김슬기의 컴포넌트
import MainKim from "./pages/kimseulki/Main/Main";
import LoginKim from "./pages/kimseulki/Login/Login";

// 안병우의 컴포넌트
import MainAn from "./pages/anbyungwoo/Main/Main";
import LoginAn from "./pages/anbyungwoo/Login/Login";

// 이인재의 컴포넌트
import MainLee from "./pages/leeinjae/Main/Main";
import LoginLee from "./pages/leeinjae/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kim-main" element={<MainKim />} />
        <Route path="/kim-login" element={<LoginKim />} />
        <Route path="/an-main" element={<MainAn />} />
        <Route path="/an-login" element={<LoginAn />} />
        <Route path="/lee-main" element={<MainLee />} />
        <Route path="/lee-login" element={<LoginLee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
