import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameBoard from  '../../../../components/main-content/game-board/GameBoard';
import {boardData} from '../../../../components/main-content/game-board/boardData';

describe('GameBoard component', () => {
  it('should have "Game/Wins/Losses/Draws and Turn as column titles"', () => {
    const wrapper = shallow(<GameBoard boardData={boardData} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have table id of "rpc-table"', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.find('#rpc-table').length).toBe(1);
  });
  it('should render score headings data pulled from boardData', () => {
    const wrapper = shallow(<GameBoard />);
    const data =  boardData();
    expect(wrapper.state('board')).toEqual(data);
  });



});


