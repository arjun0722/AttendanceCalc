import { createSlice } from "@reduxjs/toolkit";

const StaffReducer = createSlice({
  name: "staff",
  initialState: [],
  reducers: {
    addStaff(state, action) {
      state.push(action.payload);
    },
    staffattendance(state, action) {
      const { tag, id } = action.payload;

      const index = state.findIndex((item) => item.id === id);

      if (index !== -1) {
        state[index] = { ...state[index], tag };
      }
    },
  },
});
export const { addStaff, staffattendance } = StaffReducer.actions;
export default StaffReducer.reducer;
