import { useEffect, useState } from "react";
import styles from "./Timer.module.css"; // Import the CSS module

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "13 April 2024 00:00:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    const d = Math.floor(time / (1000 * 60 * 60 * 24));
    const h = Math.floor((time / (1000 * 60 * 60)) % 24);
    const m = Math.floor((time / (1000 * 60)) % 60);
    const s = Math.floor((time / 1000) % 60);

    setDays(d);
    setHours(h + d * 24);
    setMinutes(m);
    setSeconds(s);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.timerContainer}>
      {hours > 0 && (
        <div className={styles.timerItem}>
          <h1 className={styles.timerValue}>{hours < 10 ? "0" + hours : hours} </h1>
          <span className={styles.timerLabel}>Hours</span>
        </div>
      )}
      {hours>0 && (
        <div className={styles.timerItem}><h1>:</h1>
        </div>
      )}
      <div className={styles.timerItem}>
        <h1 className={styles.timerValue}>{minutes < 10 ? "0" + minutes : minutes}</h1>
        <span className={styles.timerLabel}>Minutes</span>
      </div>
      <div className={styles.timerItem}><h1>:</h1>
        </div>
      <div className={styles.timerItem}>
        <h1 className={styles.timerValue}>{seconds < 10 ? "0" + seconds : seconds}</h1>
        <span className={styles.timerLabel}>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
