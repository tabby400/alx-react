import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer user={{ username: 'testUser' }} />);
  });


});
