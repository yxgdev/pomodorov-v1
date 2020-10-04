import {
  DISPLAY_POMO_INITIAL,
  POMO_MODE,
  SET_REMAINING_TIME,
  START_POMO,
  PAUSE_POMO,
  UPDATE_MODE,
  START_TIMER,
  STOP_TIMER,
  STOP_TIMER_AND_UPDATE_DISPLAY,
  INCREMENT_TODAY_TIMER,
} from '../actions/types';

const initialState = {
  displayTimeDesc: 'POMODORO',
  displayTime: '25:00',
  currentMode: POMO_MODE,
  remainingMin: 25,
  remainingSec: 0,
  paused: true,
  delay: null,
  todayTimerCount: 0,
};

const timerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_POMO:
      // Start the timer
      return { ...state, displayTime: payload, paused: false };

    case DISPLAY_POMO_INITIAL:
      // Used to display initial Time before starting
      const { displayTimeDesc, displayTime } = payload;
      return { ...state, displayTimeDesc, displayTime };
    // Update to change mode
    case UPDATE_MODE:
      return { ...state, currentMode: payload };

    case SET_REMAINING_TIME:
      // keep setting the remaining time, so it can be paused
      const { newMin, newSec } = payload;
      return { ...state, remainingMin: newMin, remainingSec: newSec };

    case PAUSE_POMO:
      return { ...state, paused: true };
    case START_TIMER:
      // payload is delay
      return { ...state, delay: payload };
    case STOP_TIMER:
      // payload is delay
      return { ...state, delay: payload };
    case STOP_TIMER_AND_UPDATE_DISPLAY:
      return {
        ...state,
        displayTime: payload.displayTime,
        delay: payload.delay,
      };
    case INCREMENT_TODAY_TIMER:
      return { ...state, todayTimerCount: payload };

    default:
      return state;
  }
};
export default timerReducer;
