// import te fromJs function from immutable library
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);
// uses getin to access the nested value in the immutable map
  return mappedObj.getIn(array, undefined);
}
