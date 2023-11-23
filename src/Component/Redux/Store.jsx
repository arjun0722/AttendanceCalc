import { configureStore } from "@reduxjs/toolkit";
import StaffReducer from "./StaffReducer";

const Store = configureStore({
  reducer: {
    staff: StaffReducer,
  },
});
export default Store;
