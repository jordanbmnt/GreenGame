import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movementReducerSlice from "./reducers/characterMovementReducerSlice";
import mySaga from "./sagas/sagas";
import scoreReducerSlice from "./reducers/scoreSlice";
import timerReducerSlice from "./reducers/timerSlice";
import congratulationsMessageSlice from "./reducers/congratulationsMessageSlice";
import thunk from "redux-thunk";

const combinedReducers = combineReducers({
  movementReducer: movementReducerSlice,
  scoreReducer: scoreReducerSlice,
  timeReducer: timerReducerSlice,
  congratulationsMessageReducer: congratulationsMessageSlice,
});

const congratulationsTestingReducer = combineReducers({
  scoreReducer: scoreReducerSlice,
  timeReducer: timerReducerSlice,
  congratulationsMessageReducer: congratulationsMessageSlice,
});

const movementTestingReducer = combineReducers({
  movementReducer: movementReducerSlice,
  scoreReducer: scoreReducerSlice,
  timeReducer: timerReducerSlice,
  congratulationsMessageReducer: congratulationsMessageSlice,
});

export const setupUserInfoStore = (preloadedState) => {
  return configureStore({
    reducer: congratulationsTestingReducer,
    preloadedState,
    middleware: [thunk],
  });
};

export const setupMovementStore = (preloadedState) => {
  return configureStore({
    reducer: movementTestingReducer,
    preloadedState,
    middleware: [thunk],
  });
};

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(thunk),
});

sagaMiddleware.run(mySaga);
