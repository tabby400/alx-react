import React from "react";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from 'aphrodite';

function CourseList() {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    border: '1px solid #000',
  },
});

export default CourseList;