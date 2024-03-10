import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer Component', () => {
  let wrapper;
  const fetchNotificationsMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer notifications={[]} fetchNotifications={fetchNotificationsMock} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetchNotifications on mount', () => {
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
