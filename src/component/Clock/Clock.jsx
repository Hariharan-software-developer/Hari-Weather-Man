import { useEffect, useRef } from "react";
import "./Clock.css";

export default function Clock() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const scale = (num, in_min, in_max, out_min, out_max) =>
      ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

    const setTime = () => {
      const time = new Date();
      const date = time.getDate();
      const month = time.getMonth();
      const day = time.getDay();
      const hours = time.getHours();
      const hoursForClock = hours >= 13 ? hours % 12 : hours;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      if (hourRef.current)
        hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
      if (secondRef.current)
        secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
      if (timeRef.current)
        timeRef.current.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
      if (dateRef.current)
        dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
    };

    setTime();
    const interval = setInterval(setTime, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const toggleTheme = (e) => {
    document.documentElement.classList.toggle("dark");
    e.target.innerText = document.documentElement.classList.contains("dark")
      ? "Light mode"
      : "Dark mode";
  };
  

  return (
    <div className="clock-fixed">
      <button className="toggle" onClick={toggleTheme}>Dark mode</button>

      <div className="clock">
        <div ref={hourRef} className="needle hour"></div>
        <div ref={minuteRef} className="needle minute"></div>
        <div ref={secondRef} className="needle second"></div>
        <div className="center-point"></div>
      </div>
      <div ref={timeRef} className="time"></div>
      <div ref={dateRef} className="date"></div>
    </div>
  );
}
