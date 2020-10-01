import { SET_LONG_BREAK, SET_POMO, SET_SHORT_BREAK } from '../actions/types';

const initialState = {
  pomodoroMins: 25,
  shortBreakMins: 5,
  longBreakMins: 10,
};

const durationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_POMO:
      // payload is mins
      return { ...state, pomodoroMins: payload };

    case SET_SHORT_BREAK:
      return { ...state, shortBreakMins: payload };

    case SET_LONG_BREAK:
      return { ...state, longBreakMins: payload };

    default:
      return state;
  }
};
export default durationReducer;
