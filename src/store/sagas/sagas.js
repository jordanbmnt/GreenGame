import { put, takeEvery } from "redux-saga/effects";
import store from "../store";

export const greenChecker = ({ blockerMap, x, y }) => {
  for (let i = 0; i < blockerMap.length; i++) {
    const blockerX = blockerMap[i].x;
    const blockerY = blockerMap[i].y;
    if (blockerX === x && blockerY === y) return i;
  }
  return false;
};

export function* checkMove() {
  const charPos = store.getState().movementReducer.characterPos;
  const greenMap = store.getState().movementReducer.greenPos;
  const startTime = store.getState().timeReducer.startTime;
  const greenPos = greenChecker({
    blockerMap: greenMap,
    x: charPos.x,
    y: charPos.y,
  });
  if (greenPos !== false && startTime) {
    const REMOVE_GREEN_ACTION = "movementReducer/removeGreen";
    const RESET_CHAR_POS_ACTION = "movementReducer/resetCharPosition";
    const INCREMENT_ACTION = "scoreReducer/increment";
    yield put({ type: INCREMENT_ACTION });
    yield put({ type: REMOVE_GREEN_ACTION, payload: greenPos });
    yield put({ type: RESET_CHAR_POS_ACTION, payload: greenPos });
  }
}

export default function* mySaga() {
  const MOVE_RIGHT_ACTION = "movementReducer/moveRight";
  const MOVE_LEFT_ACTION = "movementReducer/moveLeft";
  const MOVE_UP_ACTION = "movementReducer/moveUp";
  const MOVE_DOWN_ACTION = "movementReducer/moveDown";
  yield takeEvery(MOVE_RIGHT_ACTION, checkMove);
  yield takeEvery(MOVE_LEFT_ACTION, checkMove);
  yield takeEvery(MOVE_UP_ACTION, checkMove);
  yield takeEvery(MOVE_DOWN_ACTION, checkMove);
}
