import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
  };

  static defaultProps = {
    logOut: () => {},
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
        <Notifications />
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

export default App;