import { getAllCourses, getCourseEntities } from './courseSelector';
import { fromJS } from 'immutable';

describe('courseSelector', () => {
  const state = fromJS({
    courses: {
      course1: { id: 'course1', name: 'Course 1' },
      course2: { id: 'course2', name: 'Course 2' },
    },
  });

  describe('getAllCourses', () => {
    it('should return all courses from the state', () => {
      const courses = getAllCourses(state);
      expect(courses.size).toBe(2);
      expect(courses.get('course1')).toEqual({ id: 'course1', name: 'Course 1' });
      expect(courses.get('course2')).toEqual({ id: 'course2', name: 'Course 2' });
    });
  });

  describe('getCourseEntities', () => {
    it('should return a list of course entities', () => {
      const courseEntities = getCourseEntities(state);
      expect(courseEntities.size).toBe(2);
      expect(courseEntities.get(0)).toEqual({ id: 'course1', name: 'Course 1' });
      expect(courseEntities.get(1)).toEqual({ id: 'course2', name: 'Course 2' });
    });
  });
});
