import timerSliceReducer, { decrement, toggleStartTime } from "./timerSlice";

describe("timerSlice", function () {
  const initialState = {
    time: 20,
    startTime: false,
  };
  it("should be able to reduce the time in the state", function () {
    const nextState = timerSliceReducer(initialState, decrement());
    expect(nextState.time).toBe(19);
  });
  it("should be able to toggle the startTime in the state", function () {
    const nextState = timerSliceReducer(initialState, toggleStartTime());
    expect(nextState.startTime).toBe(true);
  });
});
