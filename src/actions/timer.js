import { DISPLAY_POMO_INITIAL, START_POMO } from './types';

// export const updateTimer = (displayTime) => (dispatch) => {
//   // some timer stuff
//   // payload is min, sec
//   dispatch({ type: START_POMO, payload: displayTime });
// };

export const updateTimer = (displayTime) => ({
  type: START_POMO,
  payload: displayTime,
});

export const displayInitialPomo = (displayTime) => ({
  type: DISPLAY_POMO_INITIAL,
  payload: displayTime,
});
