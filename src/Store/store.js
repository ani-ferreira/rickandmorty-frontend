import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "./favsReducer";

const store = configureStore({
  reducer: {
    favsReducer: favsReducer,
  },
});

export default store;
