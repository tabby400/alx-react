// Import list and map from the immutable library
import { List, Map } from 'immutable';

// Joins elements of page 1 and 2 to a single list
export const concatLists = (page1, page2) => List(page1).concat(List(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
