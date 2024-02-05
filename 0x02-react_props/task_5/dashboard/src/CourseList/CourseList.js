import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  return (
    <table>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan={2}>No course available yet</td>
          </tr>
        ) : (
          listCourses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.credit}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;