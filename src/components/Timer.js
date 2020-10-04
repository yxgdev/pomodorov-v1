import React, { useEffect, useRef, useState } from 'react';
import tomatoTimerImg from '../img/TomatoTimer.png';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';
import { displayInitialPomo } from '../actions/timer';
import { LONG_BREAK, POMODORO, SHORT_BREAK } from '../constants/constants';
function Timer(props) {
  // displayTimeByMode Function

  // take from props
  const {
    timer: { displayTimeDesc, displayTime, currentMode },
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
    displayInitialPomo,
  } = props;

  useEffect(() => {
    const displayInitialTimeByMode = (currentMode) => {
      const initialSecond = `00`;

      switch (currentMode) {
        case POMO_MODE:
          //   Format second to 2 digit
          displayInitialPomo(POMODORO, `${pomodoroMins}:${initialSecond}`);
          break;
        case SHORT_BREAK_MODE:
          displayInitialPomo(SHORT_BREAK, `${shortBreakMins}:${initialSecond}`);
          break;
        case LONG_BREAK_MODE:
          displayInitialPomo(LONG_BREAK, `${longBreakMins}:${initialSecond}`);
          break;

        default:
          break;
      }
    };

    displayInitialTimeByMode(currentMode);
  }, [currentMode, displayInitialPomo]);

  // My New Test

  return (
    <div className='timer gt'>
      <h3 className='timer-desc'>{displayTimeDesc}</h3>
      <h3 className='display-time'>{displayTime}</h3>
      <img src={tomatoTimerImg} alt='Tomato Timer' />
      <Buttons />
      <h2 className='quote'>KEEP GOING, STAY PRODUCTIVE</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  timer: state.timer,
  durations: state.durations,
});

const mapDispatchToProps = {
  displayInitialPomo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
