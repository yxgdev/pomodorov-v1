import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLongBreak, setPomodoro, setShortBreak } from '../actions/duration';
import { updateMode } from '../actions/timer';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';

function Durations(props) {
  // Props
  const {
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
    updateMode,
    setPomodoro,
    setShortBreak,
    setLongBreak,
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
    e.preventDefault();
    setPomodoro(pomodoroDuration);
    setShortBreak(shortBreakDuration);
    setLongBreak(longBreakDuration);
    console.log(pomodoroMins);
    console.log(shortBreakMins);
    console.log(longBreakMins);
  };
  // Component
  return (
    <div className='durations gt'>
      <h2>Durations</h2>
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
        <button>Save</button>
      </form>
      <div className='timer-options'>
        <button
          onClick={() => {
            updateMode(POMO_MODE);
          }}
        >
          Timer
        </button>
        <button
          onClick={() => {
            updateMode(SHORT_BREAK_MODE);
          }}
        >
          Short Break
        </button>
        <button
          onClick={() => {
            updateMode(LONG_BREAK_MODE);
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
});

const mapDispatchToProps = {
  updateMode,
  setPomodoro,
  setShortBreak,
  setLongBreak,
};

export default connect(mapStateToProps, mapDispatchToProps)(Durations);
