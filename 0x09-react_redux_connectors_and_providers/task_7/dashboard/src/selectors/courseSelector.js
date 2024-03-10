import { createSelector } from 'reselect';

export const getAllCourses = (state) => state.courses;

export const getCourseEntities = createSelector(
  getAllCourses,
  (courses) => courses.valueSeq().toList()
);
