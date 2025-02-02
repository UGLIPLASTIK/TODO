import { bool, number } from 'prop-types';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './timer.scss';

const Timer = ({ time, isDone }) => {
  if (time === 0) return;
  format(new Date(time * 1000), 'mm:ss');
  const [secondLeft, setSecondLeft] = useState(time);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isDone) {
      clearInterval(interval);
      setSecondLeft(0);
    }
    if (!timerRunning || secondLeft === 0) {
      clearInterval(interval);
    } else if (timerRunning) {
      interval = setInterval(() => {
        setSecondLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, secondLeft]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const formattedTime = format(new Date(secondLeft * 1000), 'mm:ss');

  return (
    <div className="timer">
      <span className="btn icon-play" onClick={startTimer}></span>
      <span className="btn icon-pause" onClick={stopTimer}></span>
      <span className="timer_time">{formattedTime}</span>
    </div>
  );
};

Timer.propTypes = {
  time: number,
  isDone: bool,
};

export default Timer;
