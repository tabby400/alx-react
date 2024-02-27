import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  logout: () => dispatch(logout()),
  displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
});

export default connect(null, mapDispatchToProps)(YourComponent);
