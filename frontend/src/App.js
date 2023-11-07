import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Store from "./redux/store";
import {
  LoginPage,
  SignUpPage,
  HomePage,
  ActivationPage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./Routes.js";
import { loadUser } from "./redux/actions/user";

const App = () => {
  const { loading } = useSelector((state) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
          </Routes>
          <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
