import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupUserInfoStore } from "../store/store";

const initialState = {
  scoreReducer: { score: 20 },
  timeReducer: { time: 0, startTime: true },
  congratulationsMessageReducer: { visible: false, userSuccess: false },
};
export const movementInitialState = {
  movementReducer: {
    characterPos: {
      x: 40,
      y: 40,
    },
    greenPos: [],
    blockerPos: [],
    borderPos: [],
    characterMovement: true,
  },
  scoreReducer: {
    score: 0,
  },
  timeReducer: {
    time: 20,
    startTime: false,
  },
  congratulationsMessageReducer: { visible: false, userSuccess: false },
};

export const userInfoTestingStore = setupUserInfoStore(initialState);

export function renderWithProviders(
  ui,
  {
    preloadedState = initialState,
    store = userInfoTestingStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
