import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFound';
import toJSON from 'enzyme-to-json';

describe('NotFound page component', () => {
  it('should render NotFound page correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have class of "not-found-wrapper"', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('.not-found-wrapper').length).toBe(1);
  });
  it('should have text content of "Page Not Found"', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.text()).toEqual('Page Not Found<Link />');
  });
});
