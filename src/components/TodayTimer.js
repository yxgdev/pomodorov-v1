import React from 'react';
import { connect } from 'react-redux';

function TodayTimer(props) {
  const {
    timer: { todayTimerCount },
  } = props;
  return (
    <div className='today-timer gt'>
      <h2>Today's Timer</h2>
      <h3>(Dont Refresh)</h3>
      <div className='total-timer'>{todayTimerCount}</div>
      <h3>Keep going, not too late</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps)(TodayTimer);
