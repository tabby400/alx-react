// Importing Immutable.js library
const { fromJS, Map } = require('immutable');

function getImmutableObject(object) {

    return fromJS(object);
}

const theObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Convert the example obj to immutable map
const immutableMap = getImmutableObject(theObject);

console.log(immutableMap);
