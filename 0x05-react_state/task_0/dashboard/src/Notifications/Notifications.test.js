import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(
      <Notifications
        listNotifications={[{ id: 1, type: "default", value: "Test" }]}
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
  });

  it("displays a message when there are no notifications", () => {
    const wrapper = shallow(
      <Notifications
        listNotifications={[]}
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    expect(wrapper.text()).toContain("No new notification for now");
  });

  it("calls handleDisplayDrawer when 'Your notifications' button is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={[]}
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.find("button").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer when 'Close' button is clicked", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={[]}
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});