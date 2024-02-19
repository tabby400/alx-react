import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("default state for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toEqual(false);
  });

  it("handleDisplayDrawer changes displayDrawer to true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toEqual(true);
  });

  it("handleHideDrawer changes displayDrawer to false", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toEqual(false);
  });
});
