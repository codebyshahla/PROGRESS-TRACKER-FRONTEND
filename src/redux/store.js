
import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./reduxSlice";

const store = configureStore({
  reducer: {
    authToken: reduxSlice,
  },
});
console.log(store);
export default store;
