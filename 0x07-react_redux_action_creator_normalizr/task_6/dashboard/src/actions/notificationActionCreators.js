import { markAsRead, setNotificationFilter } from './notificationActionCreators';

const mapDispatchToProps = (dispatch) => ({
  markAsRead: (index) => dispatch(markAsRead(index)),
  setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
});

export default connect(null, mapDispatchToProps)(YourComponent);
