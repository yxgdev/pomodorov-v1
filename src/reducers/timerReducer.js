import {
  DISPLAY_POMO_INITIAL,
  POMO_MODE,
  SET_REMAINING_TIME,
  SET_TIMER_STATUS,
  START_POMO,
  PAUSE_POMO,
  UPDATE_MODE,
} from '../actions/types';

const initialState = {
  displayTimeDesc: 'POMODORO',
  displayTime: '25:00',
  currentMode: POMO_MODE,
  remainingMin: 25,
  remainingSec: 0,
  paused: true,
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

    default:
      return state;
  }
};
export default timerReducer;
