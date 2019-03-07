import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Dashboard from '../../../components/main-content/Dashboard';
import toJSON from 'enzyme-to-json';



describe('Dashboard component', () => {
  describe('isLoading set to true', () => {
    const wrapper = shallow(<Dashboard />);
    beforeEach(() => {
      wrapper.state = {isLoading:true};
    });
    it('should render dashboard page correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper"', () => {
      expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
    });
    it('should render "Loading" on the page', () => {
      expect(wrapper.find('.mid-section-wrapper').text()).toEqual('Loading...');
    });
    it('should have class of "ball-loading"', () => {
      expect(wrapper.find('.ball-loading').length).toBe(1);
    });

  });
  describe('isLoading set to false', () => {
    const wrapper = render(<Dashboard />);
    beforeEach(() => {
      wrapper.state = {isLoading: false};
    });
    it('should render dashboard page correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper loading"', () => {
      expect(wrapper.hasClass('mid-section-wrapper loading')).toEqual(true);
    });
    it('should Not have a class of "ball-loading"', () => {
      expect(wrapper.hasClass('ball-loading')).toEqual(false);
    });
    it('should have an h1 tag of Dashboard data', () => {
      expect(wrapper.find('h1').text()).toEqual('Dashboard Data');
    });

  });
  //   // it('should have a scoreboard with zero number of wins at load time', () => {
  //   //   const wrapper = shallow(<Dashboard />);
  //   //   wrapper.setState({
  //   //     isLoading: false
  //   //   });
  //   //   expect(wrapper.state('wins')).toBe(0);
  //   // });
  //   // it('should have a scoreboard with zero number of draws at load time', () => {
  //   //   const wrapper = shallow(<Dashboard />);
  //   //   wrapper.setState({
  //   //     isLoading: false
  //   //   });
  //   //   expect(wrapper.state('draws')).toBe(0);
  //   // });
  //   // it('should have a scoreboard with zero number of losses at load time', () => {
  //   //   const wrapper = shallow(<Dashboard />);
  //   //   wrapper.setState({
  //   //     isLoading: false
  //   //   });
  //   //   expect(wrapper.state('losses')).toBe(0);
  //   // });
  //   // describe('Player', () => {
  //   //   it('should return "Computer as player 3" upon clicking Player Computer', () => {
  //   //     const wrapper = shallow(<Dashboard />);
  //   //     wrapper.setState({
  //   //       isLoading: false
  //   //     });
  //   //     const playerwrap = mount(<Player name={'Computer'} playerNumber={3} />);
  //   //     playerwrap.simulate('click');
  //   //     expect(playerwrap.text()).toEqual('Computer as player 3');
  //   //   });
  //   //   it('should return "Kyle Broflovski as player 2" upon clicking Player Kyle Broflovski', () => {
  //   //     const wrapper = shallow(<Dashboard />);
  //   //     wrapper.setState({
  //   //       isLoading: false
  //   //     });
  //   //     const playerwrap = mount(<Player name={'Kyle Broflovski'} playerNumber={2} />);
  //   //     playerwrap.simulate('click');
  //   //     expect(playerwrap.text()).toEqual('Kyle Broflovski as player 2');
  //   //   });
  //   // });

  //   // describe('HandButton when playing computer or another player', () => {
  //   //   it('should return "Rock" when rock hand component clicked', () => {
  //   //     const wrapper = shallow(<Dashboard />);
  //   //     wrapper.setState({
  //   //       isLoading: false,
  //   //       playerChoice: 3
  //   //     });
  //   //     const handwrap = mount(<HandButton choice={'rock'} hand={'Rock'} />);
  //   //     handwrap.simulate('click');
  //   //     expect(handwrap.text()).toEqual('Rock');
  //   //   });
  //   //   it('should return "Paper" when paper hand component clicked', () => {
  //   //     const wrapper = shallow(<Dashboard />);
  //   //     wrapper.setState({
  //   //       isLoading: false,
  //   //       playerChoice: 3
  //   //     });
  //   //     const handwrap = mount(<HandButton choice={'paper'} hand={'Paper'} />);
  //   //     handwrap.simulate('click');
  //   //     expect(handwrap.text()).toEqual('Paper');
  //   //   });
  //   //   it('should return "Scissors" when scissors hand component clicked', () => {
  //   //     const wrapper = shallow(<Dashboard />);
  //   //     wrapper.setState({
  //   //       isLoading: false,
  //   //       playerChoice: 3
  //   //     });
  //   //     const handwrap = mount(<HandButton choice={'scissors'} hand={'Scissors'} />);
  //   //     handwrap.simulate('click');
  //   //     expect(handwrap.text()).toEqual('Scissors');
  //   //   });
  //   // });
  // });

});
