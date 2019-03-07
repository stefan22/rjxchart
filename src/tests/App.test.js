import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../components/App';

describe('App component', () => {
  it('should render home page component correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
