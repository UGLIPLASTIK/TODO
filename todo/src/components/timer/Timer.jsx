import { number } from 'prop-types';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './timer.scss';

const Timer = ({ time }) => {
  format(new Date(time * 1000), 'mm:ss');
  const [secondLeft, setsecondLeft] = useState(time);
  const [timerRunning, setTimerRunning] = useState(false);
  useEffect(() => {
    let interval = null;
    if (!timerRunning || secondLeft === 0) {
      clearInterval(interval);
    } else if (timerRunning) {
      interval = setInterval(() => {
        setsecondLeft((prev) => prev - 1);
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
  console.log(formattedTime);

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
};

export default Timer;
