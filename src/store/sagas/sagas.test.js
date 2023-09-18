import { takeEvery } from "redux-saga/effects";
import mySaga, { checkMove } from "./sagas";
import { actionsObj } from "../actions/actions";

describe("Sagas", function () {
  const saga = mySaga();
  it("should wait for every movementReducer and call checkMove", function () {
    expect(saga.next().value).toEqual(
      takeEvery(actionsObj.MOVE_RIGHT_ACTION, checkMove)
    );
    expect(saga.next().value).toEqual(
      takeEvery(actionsObj.MOVE_LEFT_ACTION, checkMove)
    );
    expect(saga.next().value).toEqual(
      takeEvery(actionsObj.MOVE_UP_ACTION, checkMove)
    );
    expect(saga.next().value).toEqual(
      takeEvery(actionsObj.MOVE_DOWN_ACTION, checkMove)
    );
  });
});
