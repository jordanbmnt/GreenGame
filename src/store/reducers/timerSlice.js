import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 20,
  startTime: false,
};

export const timerReducerSlice = createSlice({
  name: "timerReducer",
  initialState,
  reducers: {
    decrement: (state) => {
      state.time -= 1;
    },
    setTimer: (state, action) => {
      state.time = action.payload;
    },
    toggleStartTime: (state) => {
      state.startTime = !state.startTime;
    },
  },
});

export const { decrement, setTimer, toggleStartTime } =
  timerReducerSlice.actions;

export default timerReducerSlice.reducer;
