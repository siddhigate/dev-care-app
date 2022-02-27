import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import Score from "../components/core/Score";
import TimerClock from "../components/core/TimerClock";
import Toggles from "../components/core/Toggles";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useRef, useState } from "react";
import { notify } from "../services/notifications";

import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import * as tf from '@tensorflow/tfjs';
import { model } from "@tensorflow/tfjs";

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

const fromDatasetObject = (datasetObject)  => {
  return Object.entries(datasetObject).reduce(
    (result, [indexString, { data, shape }]) => {
      const tensor = tf.tensor2d(data, shape);
      const index = Number(indexString);

      result[index] = tensor;

      return result;
    },
    {}
  );
}

const classifier = knnClassifier.create();

function Dashboard() {
  const [time, setTime] = useState(50);

  const timerRef = useRef(null);

  const startHandler = () => {
    let timerAPI = timerRef.current.getApi();
    timerAPI.start();
  };

  const restart = () => {
    console.log(classifier.getNumClasses());
    setTime(20000);
  };

  useEffect(() => {
    navigator.serviceWorker.register('sw.js');
    let str = localStorage.getItem("myData")
    console.log("mydata",JSON.parse(str))
    classifier.setClassifierDataset(
      fromDatasetObject(JSON.parse(localStorage.getItem("myData")))
   );
   console.log(classifier.getNumClasses());
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
