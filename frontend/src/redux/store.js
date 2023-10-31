import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/user";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
