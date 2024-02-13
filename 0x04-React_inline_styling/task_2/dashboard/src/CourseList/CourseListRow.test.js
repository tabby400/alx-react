import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('Renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="First" textSecondCell="Second" />);
  });

  it('Renders a regular row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.hasClass('defaultRow')).toEqual(true);
  });

  it('Renders a header row with correct background color', () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="First"
        textSecondCell="Second"
        isHeader={true}
      />
    );
    expect(wrapper.hasClass('headerRow')).toEqual(true);
  });
});