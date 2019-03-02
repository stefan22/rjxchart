import React from 'react';
import {shallow, mount} from 'enzyme';
import Dashboard from '../../../components/main-content/Dashboard';
import toJSON from 'enzyme-to-json';
import HandButton from '../../../components/main-content/game-board/HandButton';
import Player from '../../../components/main-content/Player';


describe('Dashboard component', () => {
  describe('isLoading set to true', () => {
    it('should render dashboard page correctly', () => {
      const wrapper = shallow(<Dashboard />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper"', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
    });
    it('should have state "isLoading" set to true', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.state('isLoading')).toBe(true);
    });
  });
  describe('isLoading set to false', () => {
    it('should render dashboard page correctly', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper"', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
    });
    it('should have state "isLoading" set to false', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.state('isLoading')).toBe(false);
    });
    it('should have a scoreboard with zero number of games played at load time', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.state('games')).toBe(0);
    });
    it('should have a scoreboard with zero number of wins at load time', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.state('wins')).toBe(0);
    });
    it('should have a scoreboard with zero number of draws at load time', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.state('draws')).toBe(0);
    });
    it('should have a scoreboard with zero number of losses at load time', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false
      });
      expect(wrapper.state('losses')).toBe(0);
    });
    describe('Player', () => {
      it('should return "Computer as player 3" upon clicking Player Computer', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.setState({
          isLoading: false
        });
        const playerwrap = mount(<Player name={'Computer'} playerNumber={3} />);
        playerwrap.simulate('click');
        expect(playerwrap.text()).toEqual('Computer as player 3');
      });
      it('should return "Kyle Broflovski as player 2" upon clicking Player Kyle Broflovski', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.setState({
          isLoading: false
        });
        const playerwrap = mount(<Player name={'Kyle Broflovski'} playerNumber={2} />);
        playerwrap.simulate('click');
        expect(playerwrap.text()).toEqual('Kyle Broflovski as player 2');
      });
    });

    describe('HandButton when playing computer or another player', () => {
      it('should return "Rock" when rock hand component clicked', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.setState({
          isLoading: false,
          playerChoice: 3
        });
        const handwrap = mount(<HandButton choice={'rock'} hand={'Rock'} />);
        handwrap.simulate('click');
        expect(handwrap.text()).toEqual('Rock');
      });
      it('should return "Paper" when paper hand component clicked', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.setState({
          isLoading: false,
          playerChoice: 3
        });
        const handwrap = mount(<HandButton choice={'paper'} hand={'Paper'} />);
        handwrap.simulate('click');
        expect(handwrap.text()).toEqual('Paper');
      });
      it('should return "Scissors" when scissors hand component clicked', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.setState({
          isLoading: false,
          playerChoice: 3
        });
        const handwrap = mount(<HandButton choice={'scissors'} hand={'Scissors'} />);
        handwrap.simulate('click');
        expect(handwrap.text()).toEqual('Scissors');
      });
    });
  });
});
