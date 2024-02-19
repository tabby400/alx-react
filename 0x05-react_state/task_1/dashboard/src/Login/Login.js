import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email !== '' && this.state.password !== '' });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: password !== '' && this.state.email !== '' });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Logging in with email:', this.state.email, 'and password:', this.state.password);

    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.appBody)}>
              <p>Login to access the full dashboard</p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
              <input type="submit" value="Submit" disabled={!this.state.enableSubmit} />
            </div>
          </form>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    padding: '10px',
  },
});

export default Login;