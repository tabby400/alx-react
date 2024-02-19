import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });

  it('Submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toEqual(true);
  });

  it('Button is enabled after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.setState({ email: 'test@example.com', password: 'password123' });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toEqual(false);
  });
});