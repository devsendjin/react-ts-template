import { useEffect, useState } from "react";
import { DateFormats, formatDateTime, Time } from "utils/datetime.utils";
import styles from "./Timer.module.scss";

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(Date.now()), Time.Second);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.time}>{formatDateTime(currentTime, DateFormats.ISO_DATE)}</span>
      <span className={styles.time}>{formatDateTime(currentTime, DateFormats.ISO_TIME)}</span>
    </div>
  );
};
