import React from 'react';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch';

const Header = ({ title }) => {
  return (
    <header>
      <Stats />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
