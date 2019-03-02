import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import MainMenu from '../../components/top-content/MainMenu';

describe('MainMenu component', () => {
  it('should render MainMenu component correctly', () => {
    const wrapper = shallow(<MainMenu />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have class of "full-container"', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper.find('.full-container').length).toBe(1);
  });
  it('should have a NavLink with class of "nav topbar-home"', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper.find('.nav.topbar-home').length).toBe(1);
  });
});
