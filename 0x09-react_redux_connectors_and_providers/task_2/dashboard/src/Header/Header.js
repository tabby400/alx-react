import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions'; // Import logout action creator

const Header = ({ user, logout }) => {
  return (
    <div>
      <p>Welcome, {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired, // Assuming user is an object with username property
  logout: PropTypes.func.isRequired, // Assuming logout is a function
};

// mapStateToProps function to connect user prop to Redux state
const mapStateToProps = (state) => {
  return {
    user: state.user, // Assuming user is stored in the Redux state
  };
};

// mapStateToProps and logout action creator to the Header component
export default connect(mapStateToProps, { logout })(Header);
