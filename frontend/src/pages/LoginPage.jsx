import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Login from "../components/Login/Login";
import { useEffect } from "react";

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/home-page");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
