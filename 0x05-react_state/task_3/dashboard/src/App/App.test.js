import React from 'react';
import { mount } from 'enzyme';
import { App, AppContext } from './App';

describe('App Component', () => {
  it('Updates state correctly with markNotificationAsRead function', () => {
    const wrapper = mount(<App />);
    const mockNotifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];

    wrapper.find(AppContext.Provider).props().value.markNotificationAsRead(1);
    expect(wrapper.find(AppContext.Provider).props().value.listNotifications).toEqual([{ id: 2, message: 'Notification 2' }]);
  });
});