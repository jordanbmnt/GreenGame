import {
  resetCharPosition,
  resetGreensPosition,
  toggleCharacterMovement,
} from "../reducers/characterMovementReducerSlice";
import {
  toggleUserSuccess,
  toggleVisibility,
} from "../reducers/congratulationsMessageSlice";
import { resetScore } from "../reducers/scoreSlice";
import { setTimer, toggleStartTime } from "../reducers/timerSlice";

export const resetStartGame = () => {
  return (dispatch) => {
    dispatch(toggleCharacterMovement());
    dispatch(resetScore());
    dispatch(setTimer(20));
    dispatch(toggleStartTime());
    dispatch(resetCharPosition());
    dispatch(resetGreensPosition());
  };
};

export const resetEndGame = (optionalTime = 20) => {
  return (dispatch) => {
    dispatch(resetScore());
    dispatch(setTimer(optionalTime));
    dispatch(toggleStartTime());
    dispatch(toggleVisibility());
    dispatch(toggleUserSuccess(true));
    dispatch(resetGreensPosition());
  };
};
