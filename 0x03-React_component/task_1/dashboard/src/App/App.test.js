import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App tests", () => {
  let originalAlert;

  beforeAll(() => {
    originalAlert = window.alert;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it("calls logOut function and displays alert when Ctrl+H are pressed", () => {
    const logOutMock = jest.fn();
    window.alert = jest.fn();

    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    window.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});