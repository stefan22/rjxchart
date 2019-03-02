import React from 'react';
import TopNavigation from './TopNavigation';
import '../../scss/header.scss';

const Header = (props) => {

  return (
    <section className='header-wrapper'>
      <TopNavigation title={props.title} />
    </section>
  );

};

export default Header;
