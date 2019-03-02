import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TopContent from '../../components/top-content/TopContent';

describe('TopContent component', () => {
  it('should render TopContent component correctly', () => {
    const wrapper = shallow(<TopContent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
