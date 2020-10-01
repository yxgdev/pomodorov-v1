import React from 'react';
import Durations from './Durations';
import Timer from './Timer';
import TodayTimer from './TodayTimer';

function MainContent() {
  return (
    <main className='contents'>
      <Durations />
      <Timer />
      <TodayTimer />
    </main>
  );
}

export default MainContent;
