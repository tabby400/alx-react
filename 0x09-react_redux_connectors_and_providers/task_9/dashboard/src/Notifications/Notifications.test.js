import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const notifications = [{ id: 1, value: 'Notification 1' }];

  beforeEach(() => {
    wrapper = shallow(<Notifications notifications={notifications} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  
});
