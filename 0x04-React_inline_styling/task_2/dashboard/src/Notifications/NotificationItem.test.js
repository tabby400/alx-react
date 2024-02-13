import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('Renders without crashing', () => {
    const notification = { id: 1, content: 'Notification Content', urgent: false };
    const markAsRead = jest.fn();
    shallow(<NotificationItem notification={notification} markAsRead={markAsRead} />);
  });

  it('Applies urgent styles to urgent notifications', () => {
    const notification = { id: 2, content: 'Urgent Notification', urgent: true };
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem notification={notification} markAsRead={markAsRead} />);
    expect(wrapper.hasClass('NotificationItem')).toEqual(true);
    expect(wrapper.hasClass('urgentItem')).toEqual(true);
  });

  it('Applies default styles to non-urgent notifications', () => {
    const notification = { id: 3, content: 'Regular Notification', urgent: false };
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem notification={notification} markAsRead={markAsRead} />);
    expect(wrapper.hasClass('NotificationItem')).toEqual(true);
    expect(wrapper.hasClass('urgentItem')).toEqual(false);
    expect(wrapper.hasClass('defaultItem')).toEqual(true);
  });
});