import { SET_LONG_BREAK, SET_POMO, SET_SHORT_BREAK } from './types';

export const setPomodoro = (minute) => ({
  type: SET_POMO,
  payload: minute,
});

export const setShortBreak = (minute) => ({
  type: SET_SHORT_BREAK,
  payload: minute,
});

export const setLongBreak = (minute) => ({
  type: SET_LONG_BREAK,
  payload: minute,
});
