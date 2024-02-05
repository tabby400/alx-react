import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ textFirstCell, textSecondCell }) {
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  textSecondCell: '',
};

export default CourseListRow;