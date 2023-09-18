import { shallow } from "enzyme";
import Instructions from "./Instructions";

describe("Instructions", function () {
  let container;
  beforeEach(() => {
    container = shallow(<Instructions />);
  });
  it("should have a heading for the game name", function () {
    expect(container.find("h1").length).toBe(1);
  });
  it("should have sub-headings for the game instructions", function () {
    expect(container.find("h3").length).toBe(2);
  });
  it("should have descriptions for the game instructions", function () {
    expect(container.find("p").length).toBe(2);
  });
  it("should have a list element for every direction", function () {
    expect(container.find("li").length).toBe(4);
  });
});
