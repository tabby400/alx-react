import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    margin: '10px',
  },
});

App.propTypes = {
  logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;