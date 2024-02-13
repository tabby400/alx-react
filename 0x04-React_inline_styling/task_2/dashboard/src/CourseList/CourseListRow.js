import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

  return (
    <tr className={css(rowStyle)}>
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

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
});

export default CourseListRow;