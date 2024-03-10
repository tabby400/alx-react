import React from 'react';
import { mapStateToProps } from './App'; // Import mapStateToProps function
import { fromJS } from 'immutable'; // Import fromJS from Immutable

describe('mapStateToProps', () => {
  it('should return the right object when passing the state isUserLoggedIn: true', () => {
    // the state
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
      },
    });

    // Call mapStateToProps with the defined state
    const props = mapStateToProps(state);

    // Verify that the returned props isLoggedIn: true
    expect(props.isLoggedIn).toEqual(true);
  });
});
