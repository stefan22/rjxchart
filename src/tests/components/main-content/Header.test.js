import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json';
import Header from '../../../components/main-content/Header';

describe('Header component', () => {
  it('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have class of "top-score" ', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.top-score').length).toBe(1);
    expect(wrapper.find('section').length).toBe(1);
  });
  it('should have a "section" tag wrapper', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('section').length).toBe(1);
  });
});
