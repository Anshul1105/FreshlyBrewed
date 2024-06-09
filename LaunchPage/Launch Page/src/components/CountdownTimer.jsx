import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTime(hours * 3600 + minutes * 60 + seconds);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="countdown-timer">
      <h1>Enter Time</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="hours">Hours:</label>
          <input
            type="number"
            id="hours"
            name="hours"
            value={hours}
            onChange={(event) => setHours(event.target.value)}
            min="0"
            max="99"
          />
        </div>
        <div className="input-group">
          <label htmlFor="minutes">Minutes:</label>
          <input
            type="number"
            id="minutes"
            name="minutes"
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
            min="0"
            max="59"
          />
        </div>
        <div className="input-group">
          <label htmlFor="seconds">Seconds:</label>
          <input
            type="number"
            id="seconds"
            name="seconds"
            value={seconds}
            onChange={(event) => setSeconds(event.target.value)}
            min="0"
            max="59"
          />
        </div>
        <button type="submit">Start</button>
      </form>
      <div className="box">
        <span className="value">{Math.floor(time / 3600)}</span>
        <span className="label">Hours</span>
      </div>
      <div className="box">
        <span className="value">{Math.floor((time % 3600) / 60)}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="box">
        <span className="value">{time % 60}</span>
        <span className="label">Seconds</span>
     </div>
    </div>
  );
};

export default CountdownTimer;