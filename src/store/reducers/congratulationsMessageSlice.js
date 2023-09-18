import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  userSuccess: false,
};

export const congratulationsMessageSlice = createSlice({
  name: "congratulationsMessageReducer",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.visible = !state.visible;
    },
    toggleUserSuccess: (state, action) => {
      state.userSuccess = action.payload;
    },
  },
});

export const { toggleVisibility, toggleUserSuccess } =
  congratulationsMessageSlice.actions;

export default congratulationsMessageSlice.reducer;
