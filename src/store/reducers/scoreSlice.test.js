import scoreSliceReducer, { increment, resetScore } from "./scoreSlice";

describe("scoreSlice", function () {
  let initialState;
  beforeEach(() => {
    initialState = {
      score: 0,
    };
  });
  it("should increment the score when called", function () {
    const nextState = scoreSliceReducer(initialState, increment());
    expect(nextState.score).toBe(1);
  });
  it("should reset the score when called", function () {
    let nextState = scoreSliceReducer(initialState, increment());
    expect(nextState.score).toBe(1);
    nextState = scoreSliceReducer(initialState, resetScore());
    expect(nextState.score).toBe(0);
  });
});
