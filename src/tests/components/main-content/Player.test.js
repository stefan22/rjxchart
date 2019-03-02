import React from 'react';
import {shallow} from 'enzyme';
import Player from '../../../components/main-content/Player';

describe('Player component', () => {
  it('should render player correctly', () => {
    const wrapper = shallow(<Player />);
    expect(wrapper).toMatchSnapshot();
  });
});
