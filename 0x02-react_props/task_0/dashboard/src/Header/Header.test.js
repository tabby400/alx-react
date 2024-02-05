import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

});