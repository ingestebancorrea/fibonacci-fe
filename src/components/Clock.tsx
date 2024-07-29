import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.toLocaleDateString();

  // Add leading zeros to minutes and seconds if needed
  const formatTimeUnit = (unit:number) => unit < 10 ? `0${unit}` : unit;

  return (
    <Typography variant="h4">
      {`${day} - ${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)} `}
    </Typography>
  );
};

export default Clock;
