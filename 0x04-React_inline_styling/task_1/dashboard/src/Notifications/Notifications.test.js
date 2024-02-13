import React from 'react';
import { shallow } from 'enzyme';  // no children involved
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('Renders without crashing', () => {
    shallow(<Notifications listNotifications={[]} />);
  });
});