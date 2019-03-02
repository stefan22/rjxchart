import React from 'react';
//loading elem
export const bringBall = <div className="ball-loading text-center">Loading...</div>;

export const getWinner = (playerChoice, computerChoice) => {
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };
  if (playerChoice === computerChoice) {
    return 'draws';
  }
  if (computerChoice === rules[playerChoice]) {
    return 'wins';
  }
  else {
    return 'losses';
  }
};

export const getRandomChoice = () => {
  const choices = [ 'rock', 'paper', 'scissors' ];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const startPreShow = (remove) => {
  let winnerScore = '', gmv = '', scoreTitle;
  const page = document.querySelector('#root .page-wrapper');
  const divOvrlay = document.createElement('div');
  divOvrlay.className = 'inner-ovrlay';
  //first-rule / winnerScore
  if(remove === 'First Rule of RPC: choose an opponent') {
    gmv = `
       First Rule of RPC: <br/>
       Choose an opponent!`;
  } else
  if(remove === 'wins' || remove === 'draws' || remove === 'losses') {
    winnerScore = remove;
  }

  const buildOverlay = () => { //overlay div
    const divWrap = document.createElement('div');
    const scorePar = document.createElement('p');
    divWrap.id = 'ovrlaywrap';
    if(winnerScore) {
      divOvrlay.className = `${(winnerScore
        .indexOf(winnerScore) === 0) ?  //is-win, is-loss,is-draw
        'inner-ovrlay is-' + winnerScore :
        'inner-ovrlay'}`;
    }
    scoreTitle = document.createElement('h3');
    scorePar.className = 'score-par';
    if(remove === '' &&
       winnerScore === '') { //is-rule-violation-picked plyr
      scoreTitle
        .textContent = 'Cannot Play Against yourself!';
      scoreTitle
        .className = `${(gmv !== '') ?
          'score-title text-center is-rule-violation' :
          'score-title text-center'}`;
    } else {
      scoreTitle //is-rule-violation-failed-pick plyr
        .innerHTML = `${(gmv !== '') ?
          gmv : 'Eric ' + winnerScore + '!'}`;

      scoreTitle.className = `${(gmv !== '') ?
        'score-title text-center is-rule-violation' :
        'score-title text-center'}`;
    }
    //d-ready
    divOvrlay.appendChild(scoreTitle);
    divOvrlay.appendChild(scorePar);
    divWrap.appendChild(divOvrlay);
    document.body.appendChild(divWrap);
  };
  //removed on timer
  if (remove === 'remove-class' || remove === 'rule-violation') {
    page.classList.remove('bring-down');
    document
      .getElementById('ovrlaywrap')
      .parentElement.removeChild(//rm ovrlay from dom
        document.getElementById('ovrlaywrap'));
  } else {
    page.classList.add('bring-down');
    buildOverlay();
  }
};


