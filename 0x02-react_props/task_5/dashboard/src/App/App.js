import React from 'react';
import CourseList from './CourseList/CourseList';

function App() {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return <CourseList listCourses={listCourses} />;
}

export default App;