import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const notifications = [{ id: 1, value: 'Notification 1' }];
  const setNotificationFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Notifications notifications={notifications} setNotificationFilter={setNotificationFilterMock} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('calls setNotificationFilter with URGENT when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('URGENT');
  });

  it('calls setNotificationFilter with DEFAULT when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('DEFAULT');
  });
});
