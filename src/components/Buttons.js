import React from 'react';
import { connect } from 'react-redux';
import {
  setRemainingTime,
  setTimerStatus,
  updateTimer,
} from '../actions/timer';

function Buttons({
  updateTimer,
  setRemainingTime,
  setTimerStatus,

  durations: { pomodoroMins, shortBreakMins, longBreakMins },
  timer: { remainingMin, remainingSec, paused },
}) {
  // add a new variable here
  let runningTimer;

  const intervalFunction = (min, sec) => {
    let displayTime = '';

    if (min !== 0 && sec === 0) {
      //   reset second if minute not finished
      sec = 60;
      min--;
    }

    sec--;

    // console.log(sec);

    //   Format second to 2 digit
    let formattedSecond = ('0' + sec).slice(-2);
    //   change content of displayTime

    // displayTime.innerText = `${min}:${formattedSecond}`;
    displayTime = `${min}:${formattedSecond}`;
    updateTimer(displayTime);
    setRemainingTime(min, sec);
    console.log(paused, 'wtf');
    if (min === 0 && sec === 0) {
      //   Check if timer finished
      console.log('Here?');
      clearInterval(runningTimer);
      // something equals to true
    }

    // setTimeout(() => {
    //   clearInterval(runningTimer);
    // }, 5000);
  };
  const startTimer = (min, sec) => {
    // const displayTime = document.querySelector('.display-time');
    // console.log(displayTime);
    if (min > 0 || sec > 0) {
      runningTimer = setInterval(() => {
        intervalFunction(min, sec);
      }, 1000);
    }
  };

  const stopTimer = () => {
    console.log(runningTimer);
    clearInterval(runningTimer);
  };
  // Component
  return (
    <div className='buttons'>
      <button className='stop-button button' onClick={stopTimer}>
        STOP
      </button>
      <button
        className='start-button button'
        onClick={() => {
          startTimer(remainingMin, remainingSec);
        }}
      >
        Start
      </button>
      <button onClick={() => {}}>Check pause</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  durations: state.durations,
  timer: state.timer,
});

const mapDispatchToProps = { updateTimer, setRemainingTime, setTimerStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
