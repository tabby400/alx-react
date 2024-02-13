import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  return (
    <tr style={rowStyle}>
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
  isHeader: PropTypes.bool,
};

CourseListRow.defaultProps = {
  textSecondCell: '',
  isHeader: false,
};

export default CourseListRow;