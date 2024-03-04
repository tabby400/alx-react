import courseReducer from './courseReducer';
import * as types from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return default state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should return data passed when FETCH_COURSE_SUCCESS action is passed', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];

    expect(
      courseReducer(undefined, { type: types.FETCH_COURSE_SUCCESS, data })
    ).toEqual([
      {
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: false
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
        isSelected: false
      }
    ]);
  });

  it('should update the correct item when SELECT_COURSE action is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    expect(
      courseReducer(initialState, { type: types.SELECT_COURSE, index: 2 })
    ).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });

  it('should update the correct item when UNSELECT_COURSE action is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    expect(
      courseReducer(initialState, { type: types.UNSELECT_COURSE, index: 2 })
    ).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });
});
