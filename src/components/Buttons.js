import React from 'react';
import { connect } from 'react-redux';
import {
  setRemainingTime,
  setTimerStatus,
  updateTimer,
} from '../actions/timer';

function Buttons({
  startTimer,
  stopTimer,
  updateTimer,
  setRemainingTime,
  setTimerStatus,

  durations: { pomodoroMins, shortBreakMins, longBreakMins },
  timer: { remainingMin, remainingSec, paused },
}) {
  // add a new variable here

  // var randomInterval;

  // const randomFunction = () => {
  //   randomInterval = setInterval(() => {
  //     console.log('hi');
  //   }, 1000);
  // };

  // const stopFunction = () => {
  //   clearInterval(randomInterval);
  // };

  var randomInterval;

  const randomFunction = () => {
    randomInterval = setInterval(() => {
      console.log('hi');
      updateTimer(20);
    }, 1000);
  };

  const stopFunction = () => {
    clearInterval(randomInterval);
  };

  // function stopTimer() {
  //   clearInterval(runningTimer);
  // }
  // Component

  //
  //   <button
  //   className='stop-button button'
  //   onClick={() => {
  //     stopFunction();
  //   }}
  // >
  //   STOP
  // </button>
  // <button
  //   className='start-button button'
  //   onClick={() => {
  //     randomFunction();
  //   }}
  // >
  return (
    <div className='buttons'>
      <button
        className='stop-button button'
        onClick={() => {
          // stopTimer(remainingMin, remainingSec);
          // stopFunction();
          stopTimer();
          console.log('why');
        }}
      >
        STOP
      </button>
      <button
        className='start-button button'
        onClick={() => {
          startTimer(remainingMin, remainingSec);
          // randomFunction();
        }}
      >
        Start
      </button>
      <button>Check pause</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  durations: state.durations,
  timer: state.timer,
});

const mapDispatchToProps = { updateTimer, setRemainingTime, setTimerStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

// const startTimer = (min, sec) => {
//   let displayTime = '';

//   if (min > 0 || sec > 0) {
//     runningTimer = setInterval(() => {
//       if (min !== 0 && sec === 0) {
//         sec = 60;
//         min--;
//       }
//       sec--;
//       let formattedSecond = ('0' + sec).slice(-2);
//       displayTime = `${min}:${formattedSecond}`;
//       updateTimer(displayTime);
//       setRemainingTime(min, sec);
//       if (min === 0 && sec === 0) {
//         clearInterval(runningTimer);
//       }
//     }, 1000);
//   }
// };
// const stopTimer = () => {
//   clearInterval(runningTimer);
// };
