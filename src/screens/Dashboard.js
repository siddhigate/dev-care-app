import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import Score from "../components/core/Score";
import TimerClock from "../components/core/TimerClock";
import Toggles from "../components/core/Toggles";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useRef, useState } from "react";
import { notify, notifySitStraight } from "../services/notifications";

import Webcam from "react-webcam";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import * as tf from "@tensorflow/tfjs";
import { model } from "@tensorflow/tfjs";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (<TimerClock
      minutes={zeroPad(minutes)}
      seconds={zeroPad(seconds)}
    ></TimerClock>)
  } else {
    return (
      <TimerClock
        minutes={zeroPad(minutes)}
        seconds={zeroPad(seconds)}
      ></TimerClock>
    );
  }
};

const fromDatasetObject = (datasetObject) => {
  return Object.entries(datasetObject).reduce(
    (result, [indexString, { data, shape }]) => {
      const tensor = tf.tensor2d(data, shape);
      const index = Number(indexString);

      result[index] = tensor;

      return result;
    },
    {}
  );
};

let i = 0;

const classifier = knnClassifier.create();

function Dashboard() {
  const [time, setTime] = useState(50000);
  const [isCamOn, setIsCamOn] = useState(false);

  const webcamRef = useRef(null);
  const timerRef = useRef(null);

  const startHandler = () => {
    let timerAPI = timerRef.current.getApi();
    timerAPI.start();
  };

  const onComplete = () => {
    setIsCamOn(true);
    notify(window.location.href);
    restart();
  }

  useEffect(() => {
    if(isCamOn === true)
      classifyPic();
  },[isCamOn])

  const restart = () => {

    console.log(i);
    if(i === 0){
      setTime(time + 1);
      i = 1;
    }
    else  {
      setTime(time - 1);
      i = 0;
    }
      
  };

  useEffect(() => {
    navigator.serviceWorker.register("sw.js");
    let str = localStorage.getItem("myData");
    if (str) {
      console.log("mydata", JSON.parse(str));
      classifier.setClassifierDataset(
        fromDatasetObject(JSON.parse(localStorage.getItem("myData")))
      );
      console.log(classifier.getNumClasses());
    }
  }, []);

  // const stopHandler = () => {

  //   let timerAPI = timerRef.current.getApi();
  //   timerAPI.stop();
  // }

  // const pauseHandler = () => {

  //   let timerAPI = timerRef.current.getApi();
  //   timerAPI.pause();
  // }

  const classifyPic = async () => {
    // setResult("finding if your posture is correct")
    console.log("classifying");
    let net = await mobilenetModule.load();
    const img = webcamRef.current.video;
    // Get the activation from mobilenet from the webcam.
    const activation = net.infer(img, true);
    const result = await classifier.predictClass(activation);
    console.log(result);
    setIsCamOn(false)
    if(result.label === "1") {
      notifySitStraight();
    }
    else {

    }
  };

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
                onComplete={onComplete}
              />
              <Toggles />
            </div>
            <div className="cta">
              <div>
                <button className="btn btn-primary" onClick={restart}>
                  Start
                </button>
              </div>
            </div>
          </div>
        </main>

        <Score />
      </div>
      {
        isCamOn && <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
          display: "block",
        }}
      />
      }
      
    </>
  );
}

export default Dashboard;
