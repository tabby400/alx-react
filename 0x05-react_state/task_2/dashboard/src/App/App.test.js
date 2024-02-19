import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import AppContext from './AppContext';

describe('App Component', () => {
  it('Renders without crashing', () => {
    mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: () => {} }}>
        <App />
      </AppContext.Provider>
    );
  });

  it('Updates state correctly with logIn function', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <App />
      </AppContext.Provider>
    );

    wrapper.find(App).instance().logIn('test@example.com', 'password');

    expect(wrapper.find(App).state('user')).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });
  });