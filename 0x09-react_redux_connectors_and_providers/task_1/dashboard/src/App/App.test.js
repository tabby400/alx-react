import React from 'react';
import { mapStateToProps } from './App'; // Import mapStateToProps function
import { fromJS } from 'immutable'; // Import fromJS from Immutable

describe('mapStateToProps', () => {
  it('should return the right object when passing the state isUserLoggedIn: true', () => {
    // the state
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true, // Added isNotificationDrawerVisible to state
      },
    });

    // Call mapStateToProps with the defined state
    const props = mapStateToProps(state);

    // checking the returned props contain isLoggedIn: true and displayDrawer: true
    expect(props.isLoggedIn).toEqual(true);
    expect(props.displayDrawer).toEqual(true);
  });
});
