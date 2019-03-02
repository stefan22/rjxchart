import React from 'react';
import {currentGame} from './MaincontentHelper.js';

describe('CurrentGame component', () => {
  describe('correct sentence is return to page after each game', () => {
    it('renders "You won!" in the screen if Eric wins match ', () => {
      let currentGameResult = 'wins';
      const result = currentGame({currentGameResult});
      expect(result).toEqual(
        <div className="current-game">
          <h3 className="text-center">You won!</h3>
        </div>
      );
    });
    it('renders "You lost!" in the screen if Eric losses match ', () => {
      let currentGameResult = 'losses';
      const result = currentGame({currentGameResult});
      expect(result).toEqual(
        <div className="current-game">
          <h3 className="text-center">You lost!</h3>
        </div>
      );
    });
    it('renders "You draw!" in the screen if Eric draws match ', () => {
      let currentGameResult = 'draws';
      const result = currentGame({currentGameResult});
      expect(result).toEqual(
        <div className="current-game">
          <h3 className="text-center">You draw!</h3>
        </div>
      );
    });
    it('renders "Click on an opponent" in the screen at page load', () => {
      let currentGameResult = null;
      const result = currentGame({currentGameResult});
      expect(result).toEqual(
        <div className="current-game">
          <h3 className="text-center">Click on an opponent, and pick your hand to begin.</h3>
        </div>
      );
    });
  });
});
