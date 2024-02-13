import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.appTitle)}>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#f5f5f5',
  },
  appLogo: {
    width: '50px',
    height: '50px',
  },
  appTitle: {
    color: '#333',
  },
});

export default Header;