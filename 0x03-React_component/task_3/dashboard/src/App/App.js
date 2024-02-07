import React, { Component } from "react";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo nec nisi elementum rhoncus. Nulla facilisi. Nam quis lectus at lacus fermentum ultricies nec et sem. In sollicitudin dolor eu est sollicitudin, nec gravida ligula finibus. Suspendisse potenti.</p>
        </BodySection>
      </div>
    );
  }
}

export default App;