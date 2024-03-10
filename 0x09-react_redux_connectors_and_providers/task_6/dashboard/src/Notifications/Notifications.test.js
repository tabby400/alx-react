import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

describe('Notifications Component', () => {
  let wrapper;
  const notifications = [{ id: 1, value: 'Notification 1' }];

  beforeEach(() => {
    wrapper = shallow(<Notifications notifications={notifications} fetchNotifications={fetchNotifications} markAsRead={markAsRead} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders notifications correctly', () => {
    const notificationItem = wrapper.find('.notification');
    expect(notificationItem.length).toBe(1);
    expect(notificationItem.text()).toEqual('Notification 1');
  });

  it('calls markAsRead when a notification is clicked', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().forceUpdate();
    const notificationItem = wrapper.find('.notification');
    notificationItem.simulate('click');
    expect(handleClickSpy).toHaveBeenCalled();
  });
});
