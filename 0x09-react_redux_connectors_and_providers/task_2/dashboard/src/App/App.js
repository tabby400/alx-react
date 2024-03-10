import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { connect } from "react-redux";
import { loginRequest } from "../actions/uiActionCreators"; // Import loginRequest action creator

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              listNotifications={this.listNotifications}
              displayDrawer={this.props.displayDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              handleHideDrawer={this.props.hideNotificationDrawer}
            />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login login={this.props.login} /> {/* Pass login prop */}
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio, necessitatibus repudiandae
              reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
              illo ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {}, // Default login action creator
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func, // PropType for login action creator
};

// Define mapStateToProps function to connect uiReducer to the component props
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.get("isUserLoggedIn"),
    displayDrawer: state.uiReducer.get("isNotificationDrawerVisible"),
  };
};

// mapDispatchToProps to the App component
const mapDispatchToProps = {
  login: loginRequest, // loginRequest action creator to login prop
};

// mapStateToProps and mapDispatchToProps to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
