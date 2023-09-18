import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const scoreReducerSlice = createSlice({
  name: "scoreReducer",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { increment, resetScore } = scoreReducerSlice.actions;

export default scoreReducerSlice.reducer;
