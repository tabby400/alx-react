import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = isHeader ? styles.headerRow : isChecked ? styles.rowChecked : styles.defaultRow;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(rowStyle)}>
      {!isHeader && (
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </td>
      )}
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
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;