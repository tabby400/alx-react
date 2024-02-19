import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import AppContext from '../App/AppContext';

describe('Notifications Component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Calls markNotificationAsRead function when button is clicked', () => {
    const markNotificationAsRead = jest.fn();
    const listNotifications = [{ id: 1, message: 'Notification 1' }];

    const wrapper = shallow(
      <AppContext.Provider value={{ listNotifications, markNotificationAsRead }}>
        <Notifications />
      </AppContext.Provider>
    );

    wrapper.find('button').simulate('click');
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});