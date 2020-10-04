import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  incrementTodayTimerCount,
  setRemainingTime,
  setTimerStatus,
  startTimer,
  stopTimer,
  updateTimer,
} from '../actions/timer';
import { POMO_MODE } from '../actions/types';
import playAudio from './essentialFunctions';

function Buttons(props) {
  const {
    startTimer,
    stopTimer,
    updateTimer,
    setRemainingTime,
    incrementTodayTimerCount,

    timer: { remainingMin, remainingSec, delay, todayTimerCount, currentMode },
  } = props;

  useInterval((min = remainingMin, sec = remainingSec) => {
    console.log('wtf');

    if (min > 0 || sec > 0) {
      if (min !== 0 && sec === 0) {
        sec = 60;
        min--;
      }
      sec--;
      let formattedSecond = ('0' + sec).slice(-2);

      updateTimer(`${min}:${formattedSecond}`);
      setRemainingTime(min, sec);
      if (min === 0 && sec === 0) {
        console.log('play audio');
        playAudio();
        if (currentMode === POMO_MODE) {
          incrementTodayTimerCount(todayTimerCount);
        }
        // clearInterval(runningTimer);
      }
    }
  }, delay);

  // Use interval function
  return (
    <div className='buttons'>
      <button
        className='stop-button button'
        onClick={() => {
          // stopTimer(remainingMin, remainingSec);
          // stopFunction();
          stopTimer();
        }}
      >
        STOP
      </button>
      <button
        className='start-button button'
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  durations: state.durations,
  timer: state.timer,
});

const mapDispatchToProps = {
  updateTimer,
  setRemainingTime,
  setTimerStatus,
  startTimer,
  stopTimer,
  incrementTodayTimerCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback
  useEffect(() => {
    console.log('UseInterval useEffect');
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      console.log('funciton tick');
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      console.log('inside the if');
      return () => clearInterval(id);
    }
  }, [delay]);
}
