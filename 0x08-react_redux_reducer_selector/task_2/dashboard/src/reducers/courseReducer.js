import * as types from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({ ...course, isSelected: false }));
    case types.SELECT_COURSE:
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case types.UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    default:
      return state;
  }
};

export default courseReducer;
