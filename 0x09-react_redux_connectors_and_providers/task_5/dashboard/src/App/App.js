import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
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
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
});

// Connect the App component to Redux store
export default connect(mapStateToProps)(App);
