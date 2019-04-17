import React from 'react';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={ players }/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
