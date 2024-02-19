import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header Component', () => {
  it('Renders without crashing', () => {
    mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
  });

  it('Displays welcome message and logout button when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('Calls logOut function when logout button is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('button').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});