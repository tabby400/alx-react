import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
  };

  static defaultProps = {
    logOut: () => {}, // Default empty function for logOut prop
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
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;