import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ user }) => {
  return (
    <div>
      <p>Welcome, {user.username}</p>
      <p>All rights reserved</p>
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.object.isRequired,
};

// Define mapStateToProps function to connect user prop to Redux state
const mapStateToProps = (state) => {
  return {
    user: state.user, // user is stored in the Redux state
  };
};

// mapStateToProps to the Footer component
export default connect(mapStateToProps)(Footer);
