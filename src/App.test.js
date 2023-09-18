import App from "./App";
import { shallow } from "enzyme";
import NavBar from "./NavBar/NavBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store";

describe("App", () => {
  let btn;
  const setUp = () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
  beforeEach(() => {
    setUp();
    btn = screen.getByTestId("start-toggle");
  });
  it("should contain a canvas", function () {
    expect(screen.getByTestId("canvas")).toBeInTheDocument();
  });
  it("should contain userInfo", function () {
    const userInfo = screen.getByTestId("user-info");
    expect(userInfo).toBeInTheDocument();
    expect(userInfo.childNodes[0].innerHTML).toBe("Time: 20s");
    expect(userInfo.childNodes[1].innerHTML).toBe("Score: 0");
  });
  it("should contain the start button", function () {
    expect(btn).toBeInTheDocument();
    expect(btn.innerHTML).toBe("Start");
  });
  it("should contain the restart button once the start button is clicked", function () {
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument();
    expect(btn.innerHTML).toBe("Restart");
  });
  it("should render the NavBar Component", () => {
    const container = shallow(<App />);
    expect(container.containsMatchingElement(<NavBar />)).toEqual(true);
  });
});
