import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('Renders without crashing', () => {
    shallow(<CourseList />);
  });
});