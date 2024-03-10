import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';

describe('CourseList Component', () => {
  let wrapper;
  const courses = [{ id: 'course1', name: 'Course 1' }];

  beforeEach(() => {
    wrapper = shallow(<CourseList courses={courses} fetchCourses={jest.fn()} selectCourse={jest.fn()} unSelectCourse={jest.fn()} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetchCourses when component mounts', () => {
    const fetchCoursesSpy = jest.spyOn(wrapper.instance().props, 'fetchCourses');
    wrapper.instance().componentDidMount();
    expect(fetchCoursesSpy).toHaveBeenCalled();
  });

  it('calls selectCourse when onChangeRow is called with checked=true', () => {
    const selectCourseSpy = jest.spyOn(wrapper.instance().props, 'selectCourse');
    wrapper.instance().onChangeRow('course1', true);
    expect(selectCourseSpy).toHaveBeenCalledWith('course1');
  });

  it('calls unSelectCourse when onChangeRow is called with checked=false', () => {
    const unSelectCourseSpy = jest.spyOn(wrapper.instance().props, 'unSelectCourse');
    wrapper.instance().onChangeRow('course1', false);
    expect(unSelectCourseSpy).toHaveBeenCalledWith('course1');
  });
});
