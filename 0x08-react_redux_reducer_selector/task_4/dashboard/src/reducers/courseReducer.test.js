import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import * as types from '../actions/courseActionTypes';
import { normalize, schema } from 'normalizr';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(fromJS({
      courses: {}
    }));
  });

  it('should update state with normalized data when FETCH_COURSE_SUCCESS action is passed', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const courseSchema = new schema.Entity('courses');
    const normalizedData = normalize(data, [courseSchema]);
    expect(
      courseReducer(undefined, { type: types.FETCH_COURSE_SUCCESS, data })
    ).toEqual(fromJS({
      courses: coursesNormalizer(data)
    }));
  });

  it('should update isSelected value when SELECT_COURSE or UNSELECT_COURSE action is passed', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: true },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false }
      }
    });
    expect(
      courseReducer(initialState, { type: types.SELECT_COURSE, index: 1 })
    ).toEqual(expectedState);

    // Test UNSELECT_COURSE action
    expect(
      courseReducer(initialState, { type: types.UNSELECT_COURSE, index: 1 })
    ).toEqual(initialState);
  });
});
