import { DISPLAY_POMO_INITIAL, POMO_MODE, START_POMO } from '../actions/types';

const initialState = {
  pomodoro: '',
  shortBreak: '',
  longBreak: '',
  running: '',
  displayTime: '',
  currentMode: POMO_MODE,
  min: 0,
  sec: 0,
};

const timerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DISPLAY_POMO_INITIAL:
    case START_POMO:
      return { ...state, displayTime: payload };

    default:
      return state;
  }
};
export default timerReducer;
