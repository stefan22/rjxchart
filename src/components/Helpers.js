import React from 'react';
//loading elem
export const bringBall = <div className="ball-loading text-center">Loading...</div>;

export const startPreShow = (remove) => {
  const page = document.querySelector('#root .page-wrapper');
  const divOvrlay = document.createElement('div');
  divOvrlay.className = 'inner-ovrlay';

  const buildOverlay = () => { //overlay div
    const divWrap = document.createElement('div');
    const scorePar = document.createElement('p');
    divWrap.id = 'ovrlaywrap';
    divOvrlay.className = 'inner-ovrlay';
    scorePar.className = 'score-par';
    divOvrlay.appendChild(scorePar);
    divWrap.appendChild(divOvrlay);
    document.body.appendChild(divWrap);
  };

  //removed on timer
  if (remove === 'remove-class') {
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


