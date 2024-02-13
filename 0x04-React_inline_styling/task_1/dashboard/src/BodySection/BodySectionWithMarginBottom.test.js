import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom Component', () => {
  it('Renders without crashing', () => {
    shallow(<BodySectionWithMarginBottom title="Title" />);
  });
});