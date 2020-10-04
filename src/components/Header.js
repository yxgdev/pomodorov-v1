import React from 'react';
import { Link } from 'react-router-dom';
import tomatoTimerImg from '../img/TomatoTimer.png';

function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={tomatoTimerImg} alt='' />
        <h1>Pomodoro V1</h1>
      </Link>
    </header>
  );
}

export default Header;
