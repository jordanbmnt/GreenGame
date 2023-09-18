import { createSlice } from "@reduxjs/toolkit";
import {
  blockerPositions,
  borderPositions,
  greensPositions,
} from "../../Game/BoardLevels/gameBoundariesArrayMaker";
export const moveabilityChecker = ({ blockerMap, x, y }) => {
  for (let i = 0; i < blockerMap.length; i++) {
    const blockerX = blockerMap[i].x;
    const blockerY = blockerMap[i].y;
    if (blockerX === x && blockerY === y) return false;
  }
  return true;
};

const initialState = {
  characterPos: {
    x: 40,
    y: 40,
  },
  greenPos: greensPositions,
  blockerPos: blockerPositions,
  borderPos: borderPositions,
  characterMovement: false,
};

export const movementReducerSlice = createSlice({
  name: "movementReducer",
  initialState: initialState,
  reducers: {
    moveLeft: (state) => {
      if (state.characterPos.x - 40 > 0 && state.characterMovement) {
        if (
          moveabilityChecker({
            blockerMap: state.blockerPos,
            x: state.characterPos.x - 40,
            y: state.characterPos.y,
          })
        )
          state.characterPos.x -= 40;
      }
    },
    moveRight: (state) => {
      if (state.characterPos.x + 40 < 560 && state.characterMovement) {
        if (
          moveabilityChecker({
            blockerMap: state.blockerPos,
            x: state.characterPos.x + 40,
            y: state.characterPos.y,
          })
        )
          state.characterPos.x += 40;
      }
    },
    moveUp: (state) => {
      if (state.characterPos.y - 40 > 0 && state.characterMovement) {
        if (
          moveabilityChecker({
            blockerMap: state.blockerPos,
            x: state.characterPos.x,
            y: state.characterPos.y - 40,
          })
        )
          state.characterPos.y -= 40;
      }
    },
    moveDown: (state) => {
      if (state.characterPos.y + 40 < 560 && state.characterMovement) {
        if (
          moveabilityChecker({
            blockerMap: state.blockerPos,
            x: state.characterPos.x,
            y: state.characterPos.y + 40,
          })
        )
          state.characterPos.y += 40;
      }
    },
    removeGreen: (state, action) => {
      state.greenPos = [
        ...state.greenPos.slice(0, action.payload),
        ...state.greenPos.slice(action.payload + 1),
      ];
    },
    resetCharPosition: (state) => {
      state.characterPos = {
        x: 40,
        y: 40,
      };
    },
    resetGreensPosition: (state) => {
      state.greenPos = greensPositions;
    },
    toggleCharacterMovement: (state) => {
      state.characterMovement = !state.characterMovement;
    },
  },
});

export const {
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  removeGreen,
  resetCharPosition,
  resetGreensPosition,
  toggleCharacterMovement,
} = movementReducerSlice.actions;

export default movementReducerSlice.reducer;
