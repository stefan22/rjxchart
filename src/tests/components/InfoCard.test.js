import React from 'react';
import {shallow} from 'enzyme';
import InfoCard from '../../components/InfoCard';

describe('InfoCard component', () => {
  it('should render InfoCard correctly', () => {
    const wrapper = shallow(<InfoCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
