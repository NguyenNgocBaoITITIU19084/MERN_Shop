import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage, SignUpPage, HomePage } from "./Routes.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
