import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem tests", () => {
  it("calls markAsRead function with correct ID on click", () => {
    const markAsReadMock = jest.fn();
    const notification = { id: 1, content: "Notification 1" };
    const wrapper = shallow(<NotificationItem notification={notification} markAsRead={markAsReadMock} />);
    wrapper.find("li").simulate("click");
    expect(markAsReadMock).toHaveBeenCalledWith(notification.id);
  });
});