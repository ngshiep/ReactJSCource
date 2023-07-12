import { useEffect, useState } from "react";

export default function TimerComponent() {
  const [time, setTime] = useState(10);
  useEffect(() => {
    console.log(12121);
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        alert("Times up");
        clearInterval(intervalId);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
  return <div>Count down from {time}</div>;
}
