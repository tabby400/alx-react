import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('Renders without crashing', () => {
    // Testing rendering 
  });

  it('Renders a regular row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty(
      'backgroundColor',
      '#f5f5f5ab'
    );
  });

  it('Renders a header row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="First"
        textSecondCell="Second"
        isHeader={true}
      />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty(
      'backgroundColor',
      '#deb5b545'
    );
  });
});