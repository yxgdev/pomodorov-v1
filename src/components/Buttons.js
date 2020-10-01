import React from 'react';
import { connect } from 'react-redux';
import { updateTimer } from '../actions/timer';

function Buttons({
  updateTimer,
  durations: { pomodoroMins, shortBreakMins, longBreakMins },
}) {
  const startTimer = (min, sec) => {
    let displayTime = '';
    // const displayTime = document.querySelector('.display-time');
    // console.log(displayTime);
    if (min > 0 || sec > 0) {
      let timer = setInterval(() => {
        if (min !== 0 && sec === 0) {
          //   reset second if minute not finished
          sec = 60;
          min--;
        }

        sec--;

        console.log(sec);

        //   Format second to 2 digit
        let formattedSecond = ('0' + sec).slice(-2);
        //   change content of displayTime

        // displayTime.innerText = `${min}:${formattedSecond}`;
        displayTime = `${min}:${formattedSecond}`;
        updateTimer(displayTime);
        if (min === 0 && sec === 0) {
          //   Check if timer finished
          clearInterval(timer);
          // something equals to true
        }
      }, 1000);
    }
  };
  // Component
  return (
    <div className='buttons'>
      <button className='stop-button button'>STOP</button>
      <button
        className='start-button button'
        onClick={() => {
          startTimer(pomodoroMins, 0);
        }}
      >
        Start
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  durations: state.durations,
});

const mapDispatchToProps = { updateTimer };

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
