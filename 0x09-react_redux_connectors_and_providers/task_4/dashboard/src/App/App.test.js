import { mapStateToProps } from './App'; // Assuming you have mapStateToProps function in App.js

describe('mapStateToProps', () => {
  it('should map state to props correctly', () => {
    const state = {
      courses: {}, // Update with your course state structure
      notifications: {}, // Update with your notifications state structure
      ui: {},
    };

    const props = mapStateToProps(state);

    // assertions here to ensure props are correctly mapped
  });
});
