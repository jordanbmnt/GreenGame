import movementReducer, {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  toggleCharacterMovement,
} from "./characterMovementReducerSlice";

describe("characterMovementSlice", function () {
  let initialState;
  it("should not move left if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        x: 40,
      },
      blockerPos: [{ x: 500, y: 500 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveLeft());
    expect(nextState).toEqual(initialState);
  });
  it("should move left if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        x: 120,
      },
      blockerPos: [{ x: 500, y: 500 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveLeft());
    expect(nextState).not.toEqual(initialState);
    expect(nextState.characterPos.x).toEqual(80);
  });
  it("should not move right if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        x: 540,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveRight());
    expect(nextState).toEqual(initialState);
  });
  it("should move right if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        x: 500,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveRight());
    expect(nextState).not.toEqual(initialState);
    expect(nextState.characterPos.x).toEqual(540);
  });
  it("should not move up if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        y: 40,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveUp());
    expect(nextState).toEqual(initialState);
  });
  it("should move up if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        y: 500,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveUp());
    expect(nextState).not.toEqual(initialState);
    expect(nextState.characterPos.y).toEqual(460);
  });
  it("should not move down if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        y: 540,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveDown());
    expect(nextState).toEqual(initialState);
  });
  it("should move down if the char is going to go over the boundary", function () {
    initialState = {
      characterPos: {
        y: 500,
      },
      blockerPos: [{ x: 570, y: 300 }],
      characterMovement: true,
    };
    const nextState = movementReducer(initialState, moveDown());
    expect(nextState).not.toEqual(initialState);
    expect(nextState.characterPos.y).toEqual(540);
  });
  it("should toggle the characterMovement", function () {
    initialState = {
      characterMovement: false,
    };
    const nextState = movementReducer(initialState, toggleCharacterMovement());
    expect(nextState).not.toEqual(initialState);
    expect(nextState.characterMovement).toEqual(true);
  });
});
