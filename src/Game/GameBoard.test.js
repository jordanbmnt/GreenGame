import GameBoard from "./GameBoard";
import {
  movementInitialState,
  renderWithProviders,
} from "../utilities/test-utils";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react";
import {
  resetCharPosition,
  toggleCharacterMovement,
} from "../store/reducers/characterMovementReducerSlice";
import { setupMovementStore } from "../store/store";

describe("GameBoard", function () {
  let movementTestingStore;
  const pressButton = (btn) => {
    userEvent.keyboard(btn);
  };
  const setUp = (state, store) => {
    renderWithProviders(<GameBoard />, {
      preloadedState: state,
      store: store,
    });
  };
  beforeEach(() => {
    movementTestingStore = setupMovementStore(movementInitialState);
    setUp(movementInitialState, movementTestingStore);
    act(() => {
      movementTestingStore.dispatch(resetCharPosition());
    });
  });
  it("should move the character one space down on the y axis if 's' or 'ArrowDown' key is pressed", function () {
    act(() => {
      pressButton("s");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      80
    );
    act(() => {
      pressButton("[ArrowDown]");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      120
    );
  });
  it("should move the character one space up on the y axis if 'w' or 'ArrowUp' key is pressed", function () {
    act(() => {
      pressButton("s");
      pressButton("s");
    });

    act(() => {
      pressButton("w");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      80
    );
    act(() => {
      pressButton("[ArrowUp]");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      40
    );
  });
  it("should move the character one space right on the x axis if 'd' or 'ArrowRight' key is pressed", function () {
    act(() => {
      pressButton("d");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      80
    );
    act(() => {
      pressButton("[ArrowRight]");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      120
    );
  });
  it("should move the character one space left on the x axis if 'a' or 'ArrowLeft' key is pressed", function () {
    act(() => {
      pressButton("d");
      pressButton("d");
    });

    act(() => {
      pressButton("a");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      80
    );
    act(() => {
      pressButton("[ArrowLeft]");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      40
    );
  });
  it("should not move the character when encountering a border on the x axis", function () {
    act(() => {
      pressButton("a");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      40
    );
  });
  it("should not move the character when encountering a border on the y axis", function () {
    act(() => {
      pressButton("w");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      40
    );
  });
  it("should not move the character when characterMovement is false", function () {
    movementTestingStore.dispatch(toggleCharacterMovement());
    act(() => {
      pressButton("w");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      40
    );
    act(() => {
      pressButton("s");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.y).toBe(
      40
    );
    act(() => {
      pressButton("a");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      40
    );
    act(() => {
      pressButton("d");
    });
    expect(movementTestingStore.getState().movementReducer.characterPos.x).toBe(
      40
    );
  });
});
