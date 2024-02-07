import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications tests", () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("calls markAsRead function with correct ID", () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const id = 1;
    instance.markAsRead(id);
    expect(consoleSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
  });
});