import congratulationsMessageReducer, {
  toggleUserSuccess,
  toggleVisibility,
} from "./congratulationsMessageSlice";

describe("congratulationsMessageSlice", function () {
  const initialState = {
    visible: false,
    userSuccess: false,
  };
  it("should be able top toggle the visibility", function () {
    const nextState = congratulationsMessageReducer(
      initialState,
      toggleVisibility()
    );
    expect(nextState.visible).toBe(true);
  });
  it("should be able top toggle the userSuccess", function () {
    const nextState = congratulationsMessageReducer(
      initialState,
      toggleUserSuccess(true)
    );
    expect(nextState.userSuccess).toBe(true);
  });
});
