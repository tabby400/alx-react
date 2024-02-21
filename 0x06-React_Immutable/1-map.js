// importing map func from the immutable library
import { Map } from 'immutable';
// the object is acceptedd and converted to immutable map
const getImmutableObject = (object) => Map(object);
// the function can be exported
export default getImmutableObject;
