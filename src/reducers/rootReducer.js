import { combineReducers } from 'redux';
import durationReducer from './durationReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
  durations: durationReducer,
});
export default rootReducer;
