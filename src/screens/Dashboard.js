import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import Score from "../components/core/Score";
import TimerClock from "../components/core/TimerClock";
import Toggles from "../components/core/Toggles";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useRef, useState } from "react";
import { notify } from "../services/notifications";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    console.log(window.location.href);
    notify(window.location.href);
    return null;
  } else {
    return (
      <TimerClock
        minutes={zeroPad(minutes)}
        seconds={zeroPad(seconds)}
      ></TimerClock>
    );
  }
};

function Dashboard() {
  const [time, setTime] = useState(50);

  const timerRef = useRef(null);

  const startHandler = () => {
    let timerAPI = timerRef.current.getApi();
    timerAPI.start();
  };

  const restart = () => {
    setTime(20000);
  };

  useEffect(() => {
    navigator.serviceWorker.register('sw.js');
  }, [])
  
    // const stopHandler = () => {
      
    //   let timerAPI = timerRef.current.getApi();
    //   timerAPI.stop();
    // }
  
    // const pauseHandler = () => {
      
    //   let timerAPI = timerRef.current.getApi();
    //   timerAPI.pause();
    // }

  useEffect(() => {
    startHandler();
  }, [time]);

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <main className="main">
          <h1>Hello Siddhi👋</h1>

          <div className="main-content">
            <div className="timer">
              <Countdown
                ref={timerRef}
                date={Date.now() + time * 60}
                autoStart={true}
                renderer={renderer}
                onComplete={restart}
              />
              <Toggles />
            </div>
            <div className="cta">
              <div>
                <button className="btn btn-primary" onClick={restart}>Start</button>
              </div>
            </div>
          </div>
        </main>

        <Score />
      </div>
    </>
  );
}

export default Dashboard;
