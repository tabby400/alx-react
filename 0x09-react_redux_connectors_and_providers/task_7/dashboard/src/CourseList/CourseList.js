mport React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, fetchCourses, selectCourse, unSelectCourse }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <table>
      {/* course list rows renderhere */}
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: getListCourses(state).toArray(),
});

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);
