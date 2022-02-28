import React from "react";

const TimerClock = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer-clock">
      {minutes} : {seconds}
    </div>
  );
};

export default TimerClock;
