import React from 'react';
import { connect } from 'react-redux';
import {
  setRemainingTime,
  stopTimerAndUpdateDisplay,
  updateMode,
} from '../actions/timer';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';

function SmallScreenButtons(props) {
  const {
    updateMode,
    setRemainingTime,
    stopTimerAndUpdateDisplay,
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
  } = props;
  return (
    <div className='small-timer-options'>
      <button
        onClick={() => {
          // stopTimer();
          stopTimerAndUpdateDisplay(`${pomodoroMins}:00`);
          updateMode(POMO_MODE);
          setRemainingTime(pomodoroMins, 0);
        }}
      >
        Timer
      </button>
      <button
        onClick={() => {
          // stopTimer();
          stopTimerAndUpdateDisplay(`${shortBreakMins}:00`);
          updateMode(SHORT_BREAK_MODE);
          setRemainingTime(shortBreakMins, 0);
        }}
      >
        Short Break
      </button>
      <button
        onClick={() => {
          // stopTimer();
          stopTimerAndUpdateDisplay(`${longBreakMins}:00`);
          updateMode(LONG_BREAK_MODE);
          setRemainingTime(longBreakMins, 0);
        }}
      >
        Long Break
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  durations: state.durations,
});

const mapDispatchToProps = {
  updateMode,
  setRemainingTime,
  stopTimerAndUpdateDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallScreenButtons);
