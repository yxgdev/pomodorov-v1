import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLongBreak, setPomodoro, setShortBreak } from '../actions/duration';
import {
  setRemainingTime,
  stopTimer,
  stopTimerAndUpdateDisplay,
  updateMode,
  updateTimer,
} from '../actions/timer';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';

function Durations(props) {
  // Props
  const {
    timer: { currentMode, delay },
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
    updateMode,
    setPomodoro,
    setShortBreak,
    setLongBreak,
    updateTimer,
    setRemainingTime,
    stopTimerAndUpdateDisplay,
  } = props;

  // form States
  const [durationSettings, setDuration] = useState({
    pomodoroDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 10,
  });
  // destructure settings
  const {
    pomodoroDuration,
    shortBreakDuration,
    longBreakDuration,
  } = durationSettings;

  // handle Change in Input
  const handleChange = (e) => {
    setDuration({
      ...durationSettings,
      [e.target.name]: parseInt(e.target.value),
    });
    console.log(
      'form',
      pomodoroDuration,
      shortBreakDuration,
      longBreakDuration
    );
    console.log('state', pomodoroMins, shortBreakMins, longBreakMins);
  };

  // handle Submit function
  const handleSubmit = (e) => {
    console.log(currentMode);
    e.preventDefault();
    setPomodoro(pomodoroDuration);
    setShortBreak(shortBreakDuration);
    setLongBreak(longBreakDuration);
  };

  useEffect(() => {
    // Change Display Time when press save button if not running
    if (delay === null) {
      switch (currentMode) {
        case POMO_MODE:
          updateTimer(`${pomodoroMins}:00`);
          setRemainingTime(pomodoroMins, 0);
          break;
        case SHORT_BREAK_MODE:
          console.log('Anything called');
          updateTimer(`${shortBreakMins}:00`);
          setRemainingTime(shortBreakMins, 0);
          break;
        case LONG_BREAK_MODE:
          updateTimer(`${longBreakMins}:00`);
          setRemainingTime(longBreakMins, 0);
          break;

        default:
          break;
      }
    }
  }, [shortBreakMins, longBreakMins, pomodoroMins]);

  // Component
  return (
    <div className='durations gt'>
      <h2>Durations (Mins)</h2>
      <form className='duration-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='timer'>Timer</label>
          <input
            type='number'
            placeholder='time'
            name='pomodoroDuration'
            value={pomodoroDuration}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='short'>Short Break</label>
          <input
            type='number'
            placeholder='short'
            name='shortBreakDuration'
            value={shortBreakDuration}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='long'>Long Break</label>
          <input
            type='number'
            placeholder='long'
            name='longBreakDuration'
            value={longBreakDuration}
            onChange={handleChange}
          />
        </div>
        <button className='save-duration'>Save</button>
      </form>
      <div className='timer-options'>
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  durations: state.durations,
  timer: state.timer,
});

const mapDispatchToProps = {
  updateMode,
  setPomodoro,
  setShortBreak,
  setLongBreak,
  stopTimer,
  updateTimer,
  setRemainingTime,
  stopTimerAndUpdateDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Durations);
