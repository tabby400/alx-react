import { selectCourse, unSelectCourse } from './courseActionCreators';

const mapDispatchToProps = (dispatch) => ({
  selectCourse: (index) => dispatch(selectCourse(index)),
  unSelectCourse: (index) => dispatch(unSelectCourse(index)),
});

export default connect(null, mapDispatchToProps)(YourComponent);
