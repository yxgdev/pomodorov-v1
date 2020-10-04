import React from 'react';
import Durations from './Durations';
import SmallScreenButtons from './SmallScreenButtons';
import Timer from './Timer';
import TodayTimer from './TodayTimer';

function MainContent() {
  return (
    <main className='contents'>
      <Durations />
      <Timer />
      <TodayTimer />
      <SmallScreenButtons />
    </main>
  );
}

export default MainContent;
