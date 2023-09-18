import { fireEvent, screen } from "@testing-library/react";
import EndGameMessage from "./EndGameMessage";
import {
  renderWithProviders,
  userInfoTestingStore,
} from "../utilities/test-utils";

describe("EndGameMessage", function () {
  let btn;
  const setUp = () => {
    renderWithProviders(<EndGameMessage userStatus={true} />);
    btn = screen.getByTestId("reset-button");
  };
  beforeEach(() => {
    setUp();
  });
  it("should display You Win! if the user wins", function () {
    expect(screen.getByText("You Win!")).toBeInTheDocument();
  });
  it("should display You Lose! if the user wins", function () {
    renderWithProviders(<EndGameMessage userStatus={false} />);
    expect(screen.getByText("You Lose!")).toBeInTheDocument();
  });
  it("should display a reset button", function () {
    expect(btn).toBeInTheDocument();
    expect(btn.innerHTML).toBe("Restart Game");
  });
  it("should reset the state when the button is clicked", function () {
    expect(userInfoTestingStore.getState().scoreReducer.score).toBe(20);
    expect(userInfoTestingStore.getState().timeReducer.time).toBe(0);
    expect(userInfoTestingStore.getState().timeReducer.startTime).toBe(true);
    expect(
      userInfoTestingStore.getState().congratulationsMessageReducer.visible
    ).toBe(false);
    expect(
      userInfoTestingStore.getState().congratulationsMessageReducer.userSuccess
    ).toBe(false);

    fireEvent.click(btn);

    expect(userInfoTestingStore.getState().scoreReducer.score).toBe(0);
    expect(userInfoTestingStore.getState().timeReducer.time).toBe(20);
    expect(userInfoTestingStore.getState().timeReducer.startTime).toBe(false);
    expect(
      userInfoTestingStore.getState().congratulationsMessageReducer.visible
    ).toBe(true);
    expect(
      userInfoTestingStore.getState().congratulationsMessageReducer.userSuccess
    ).toBe(true);
  });
});
