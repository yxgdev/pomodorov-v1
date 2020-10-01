import React, { useEffect } from 'react';
import tomatoTimerImg from '../img/TomatoTimer.png';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';
import { displayInitialPomo } from '../actions/timer';

function Timer(props) {
  // displayTimeByMode Function
  const displayInitialTimeByMode = (currentMode) => {
    const initialSecond = `00`;

    switch (currentMode) {
      case POMO_MODE:
        //   Format second to 2 digit
        displayInitialPomo(`${pomodoroMins}:${initialSecond}`);
        break;
      case SHORT_BREAK_MODE:
        displayInitialPomo(`${shortBreakMins}:${initialSecond}`);
        break;
      case LONG_BREAK_MODE:
        displayInitialPomo(`${longBreakMins}:${initialSecond}`);
        break;

      default:
        break;
    }
  };

  // take from props
  const {
    timer: { displayTime, currentMode },
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
    displayInitialPomo,
  } = props;

  useEffect(() => {
    displayInitialTimeByMode(currentMode);
  }, [currentMode]);

  return (
    <div className='timer gt'>
      <h3 className='timer-desc'>Short Break</h3>
      <h3 className='display-time'>{displayTime}</h3>
      <img src={tomatoTimerImg} alt='Tomato Timer' />
      <Buttons />
      <h2 className='quote'>KEEP GOING, TIME IS SHORT</h2>
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
