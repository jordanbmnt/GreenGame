import { shallow } from "enzyme";
import NavBar from "./NavBar";

describe("Navbar", function () {
  it("should have two items", function () {
    const container = shallow(<NavBar />);
    expect(container.find(".link").length).toBe(2);
  });
});
