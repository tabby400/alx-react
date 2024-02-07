import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  it("should not rerender with the same list of notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
    ];

    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} markNotificationAsRead={() => {}} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, "shouldComponentUpdate");

    wrapper.setProps({ listNotifications: listNotifications });

    expect(shouldComponentUpdateSpy).not.toHaveBeenCalled();
  });

  it("should rerender with a longer list of notifications", () => {
    const initialListNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
    ];

    const updatedListNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
    ];

    const wrapper = shallow(
      <Notifications listNotifications={initialListNotifications} markNotificationAsRead={() => {}} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, "shouldComponentUpdate");

    wrapper.setProps({ listNotifications: updatedListNotifications });

    expect(shouldComponentUpdateSpy).toHaveBeenCalled();
  });
});