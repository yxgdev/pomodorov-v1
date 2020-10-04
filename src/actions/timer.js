import {
  DISPLAY_POMO_INITIAL,
  INCREMENT_TODAY_TIMER,
  PAUSE_POMO,
  SET_REMAINING_TIME,
  START_POMO,
  START_TIMER,
  STOP_TIMER,
  STOP_TIMER_AND_UPDATE_DISPLAY,
  UPDATE_MODE,
} from './types';

// export const updateTimer = (displayTime) => (dispatch) => {
//   // some timer stuff
//   // payload is min, sec
//   dispatch({ type: START_POMO, payload: displayTime });
// };

export const updateTimer = (displayTime) => ({
  type: START_POMO,
  payload: displayTime,
});

export const displayInitialPomo = (displayTimeDesc, displayTime) => ({
  type: DISPLAY_POMO_INITIAL,
  payload: { displayTimeDesc, displayTime },
});

export const updateMode = (newMode) => ({
  type: UPDATE_MODE,
  payload: newMode,
});

export const setRemainingTime = (newMin, newSec) => ({
  type: SET_REMAINING_TIME,
  payload: { newMin, newSec },
});

export const setTimerStatus = (paused) => ({
  type: PAUSE_POMO,
  payload: !paused,
});

export const startTimer = (delay = 1000) => ({
  type: START_TIMER,
  payload: delay,
});

export const stopTimer = (delay = null) => ({
  type: STOP_TIMER,
  payload: delay,
});

export const stopTimerAndUpdateDisplay = (displayTime, delay = null) => ({
  type: STOP_TIMER_AND_UPDATE_DISPLAY,
  payload: { displayTime, delay },
});

export const incrementTodayTimerCount = (currentTodayTimerCount) => ({
  type: INCREMENT_TODAY_TIMER,
  payload: currentTodayTimerCount + 1,
});
