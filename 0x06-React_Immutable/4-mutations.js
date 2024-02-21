// Importing map class from the immutable library
import { Map } from 'immutable';

// immutable map with key val pairs
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// mutations applied
export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
