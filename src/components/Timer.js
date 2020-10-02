import React, { useEffect, useRef, useState } from 'react';
import tomatoTimerImg from '../img/TomatoTimer.png';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import { LONG_BREAK_MODE, POMO_MODE, SHORT_BREAK_MODE } from '../actions/types';
import {
  displayInitialPomo,
  setRemainingTime,
  updateTimer,
} from '../actions/timer';
import { LONG_BREAK, POMODORO, SHORT_BREAK } from '../constants/constants';
function Timer(props) {
  // displayTimeByMode Function

  // take from props
  const {
    timer: {
      displayTimeDesc,
      displayTime,
      currentMode,
      remainingMin,
      remainingSec,
    },
    durations: { pomodoroMins, shortBreakMins, longBreakMins },
    displayInitialPomo,
    setRemainingTime,
    updateTimer,
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
  var runningTimer;
  const [localDisplayTime, setLocalDisplayTime] = useState(displayTime);
  const [delay, setDelay] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  const startTimer = (min, sec) => {
    if (min > 0 || sec > 0) {
      runningTimer = setInterval(() => {
        if (min !== 0 && sec === 0) {
          sec = 60;
          min--;
        }
        sec--;
        let formattedSecond = ('0' + sec).slice(-2);
        // displayTime = `${min}:${formattedSecond}`;
        setLocalDisplayTime(`${min}:${formattedSecond}`);
        // console.log('hi');
        // updateTimer(displayTime);
        // setRemainingTime(min, sec);
        if (min === 0 && sec === 0) {
          clearInterval(runningTimer);
        }
      }, 1000);
      return () => {
        clearInterval(runningTimer);
      };
    }
  };

  const stopTimer = () => {
    clearInterval(runningTimer);
  };
  // My New Test
  useInterval((min = remainingMin, sec = remainingSec) => {
    console.log('wtf');

    if (min > 0 || sec > 0) {
      if (min !== 0 && sec === 0) {
        sec = 60;
        min--;
      }
      sec--;
      let formattedSecond = ('0' + sec).slice(-2);
      // displayTime = `${min}:${formattedSecond}`;
      setLocalDisplayTime(`${min}:${formattedSecond}`);
      // console.log('hi');
      updateTimer(`${min}:${formattedSecond}`);
      setRemainingTime(min, sec);
      if (min === 0 && sec === 0) {
        clearInterval(runningTimer);
      }
    }
  }, delay);

  // Use interval function

  return (
    <div className='timer gt'>
      <h3 className='timer-desc'>{displayTimeDesc}</h3>
      <h3 className='display-time'>{displayTime}</h3>
      <img src={tomatoTimerImg} alt='Tomato Timer' />
      {/* <Buttons startTimer={startTimer} stopTimer={stopTimer} /> */}
      {/* Buttons  */}
      <div className='buttons'>
        <button
          className='stop-button button'
          onClick={() => {
            // stopTimer(remainingMin, remainingSec);
            // stopFunction();
            // stopTimer();
            setDelay(null);
            console.log('why');
          }}
        >
          STOP
        </button>
        <button
          className='start-button button'
          onClick={() => {
            // startTimer(remainingMin, remainingSec);
            // randomFunction();
            setDelay(1000);
          }}
        >
          Start
        </button>
        <button>Check pause</button>
      </div>
      {/* Buttons End */}
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
  setRemainingTime,
  updateTimer,
};

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
