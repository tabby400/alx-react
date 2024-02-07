import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging tests", () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("logs on mount and unmount with Component when wrapped element is pure html", () => {
    const WrappedComponent = () => <p />;
    const ComponentWithLogging = WithLogging(WrappedComponent);
    shallow(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith("Component is mounted");
    expect(consoleSpy).toHaveBeenCalledWith("Component is going to unmount");
  });

  it("logs on mount and unmount with component name when wrapped element is Login component", () => {
    const Login = () => <div />;
    Login.displayName = "Login";
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = shallow(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith("Component Login is going to unmount");
  });
});