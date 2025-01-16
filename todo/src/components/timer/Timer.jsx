import { func } from 'prop-types';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './timer.scss';

const Timer = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && secondsElapsed !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, secondsElapsed]);
  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const formattedTime = format(new Date(secondsElapsed * 1000), 'mm:ss');

  return (
    <div className="timer">
      <span className="timer_time">{formattedTime}</span>
      <span className="btn icon-play" onClick={startTimer}></span>
      <span className="btn icon-pause" onClick={stopTimer}></span>
    </div>
  );
};

Timer.propTypes = {
  onPlayFn: func,
  onPauseFn: func,
};

export default Timer;
