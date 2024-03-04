import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { courseSchema, coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map()
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], fromJS(normalizedData.entities.courses));
    // Handle other actions...
    default:
      return state;
  }
};

export default courseReducer;
