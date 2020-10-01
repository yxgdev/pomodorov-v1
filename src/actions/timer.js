import {
  DISPLAY_POMO_INITIAL,
  PAUSE_POMO,
  SET_REMAINING_TIME,
  START_POMO,
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
