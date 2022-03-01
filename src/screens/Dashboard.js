import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import Score from "../components/core/Score";
import TimerClock from "../components/core/TimerClock";
import Toggles from "../components/core/Toggles";
import Countdown, { zeroPad } from "react-countdown";
import { useEffect, useRef, useState } from "react";
import {
  notify,
  notifyEar,
  notifySitStraight,
} from "../services/notifications";
import { setEarData } from "../services/datahandling";
import Webcam from "react-webcam";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import * as tf from "@tensorflow/tfjs";
import { model } from "@tensorflow/tfjs";
import Onboarding from "../components/onboarding/Onboarding";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <TimerClock
        minutes={zeroPad(minutes)}
        seconds={zeroPad(seconds)}
      ></TimerClock>
    );
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
let timeCounter = 1;

const classifier = knnClassifier.create();

function Dashboard() {
  let visitedHome = localStorage.getItem("visited");
  let name = localStorage.getItem("name");

  const [time, setTime] = useState(20000);
  const [isCamOn, setIsCamOn] = useState(false);

  const [isStarted, setIsStarted] = useState(false);

  const [backOption, setBackOption] = useState(true);
  const [eyeOption, setEyeOption] = useState(true);
  const [soundOption, setSoundOption] = useState(false);
  const [isPluggedOut, setIsPluggedOut] = useState();
  const [earDeviceId, setEarDeviceId] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const webcamRef = useRef(null);
  const timerRef = useRef(null);

  const startHandler = () => {
    let timerAPI = timerRef.current.getApi();
    timerAPI.start();
    setIsStarted(true);
  };

  const stopHandler = () => {
    let timerAPI = timerRef.current.getApi();
    timerAPI.stop();
    setIsStarted(false);
  };

  const onComplete = () => {
    if (backOption) {
      setIsCamOn(true);
    }
    if (eyeOption) {
      notify(window.location.href);
    }
    if (soundOption && timeCounter % 2 === 0 && !isPluggedOut) {
      notifyEar(window.location.href);
      setEarData();
    }
    timeCounter++;
    restart();
  };

  useEffect(() => {
    if (isCamOn === true) classifyPic();
  }, [isCamOn]);

  const restart = () => {
    if (i === 0) {
      setTime(time + 1);
      i = 1;
    } else {
      setTime(time - 1);
      i = 0;
    }
    startHandler();
  };

  useEffect(() => {
    stopHandler();
    let eyedata = localStorage.getItem("eyedata");
    if (!eyedata) {
      localStorage.setItem("eyedata", JSON.stringify([0, 0, 0, 0, 0, 0, 0]));
    }
    let eardata = localStorage.getItem("eardata");
    if (!eardata) {
      localStorage.setItem("eardata", JSON.stringify([0, 0, 0, 0, 0, 0, 0]));
    }
    navigator.serviceWorker.register("sw.js");
    let str = localStorage.getItem("myData");
    if (str) {
      classifier.setClassifierDataset(
        fromDatasetObject(JSON.parse(localStorage.getItem("myData")))
      );
    }
  }, []);

  useEffect(() => {
    console.log(eyeOption, backOption, soundOption)
    if(eyeOption || backOption || soundOption) {
      setIsDisabled(false)
    }
    else {
      setIsDisabled(true);
    }
  }, [eyeOption, backOption, soundOption]);

  const classifyPic = async () => {
    if (backOption) {
      let net = await mobilenetModule.load();
      const img = webcamRef.current.video;
      const activation = net.infer(img, true);
      const result = await classifier.predictClass(activation);

      setIsCamOn(false);
      if (result.label === "1") {
        notifySitStraight();
        let badposturecount = Number(localStorage.getItem("badposturecount"));
        if (!badposturecount) {
          badposturecount = 0;
        }
        localStorage.setItem("badposturecount", badposturecount + 1);
      } else {
        let goodposturecount = Number(localStorage.getItem("goodposturecount"));
        if (!goodposturecount) {
          goodposturecount = 0;
        }
        localStorage.setItem("goodposturecount", goodposturecount + 1);
      }
    }
  };

  // Ear Care
  const getLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        setEarDeviceId(stream.getAudioTracks()[0].getSettings().deviceId);

        if (earDeviceId == "default") {
          setEarDeviceId(stream.getAudioTracks()[0].getSettings().groupId);
        }

        navigator.mediaDevices.enumerateDevices().then(() => {
          let recorder = new MediaRecorder(stream);
          recorder.stream.getAudioTracks().forEach(function (track) {
            track.enabled = false;
          });
        });
      })
      .catch((err) => {
        setSoundOption(false);
      });
  };

  useEffect(() => {
    if (soundOption) {
      setIsPluggedOut(false);
      getLocalStream();
    }
  }, [soundOption]);

  navigator.mediaDevices.addEventListener("devicechange", () => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      var pluggedout = true;
      for (let i = 0; i < devices.length; i++) {
        if (
          ((devices[i].deviceId == earDeviceId) != devices[i].groupId) ==
          earDeviceId
        ) {
          pluggedout = false;
        }
      }
      if (pluggedout) {
        setIsPluggedOut(true);
      }
    });
  });

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <main className="main">
          <h1>Hello {name && <span>{name}</span>}👋</h1>

          <div className="main-content">
            <div className="timer">
              <Countdown
                ref={timerRef}
                date={Date.now() + time * 60}
                autoStart={false}
                renderer={renderer}
                onComplete={onComplete}
              />
              <Toggles
                backOption={backOption}
                eyeOption={eyeOption}
                soundOption={soundOption}
                setBackOption={setBackOption}
                setEyeOption={setEyeOption}
                setSoundOption={setSoundOption}
              />
            </div>
            <div className="cta flex-col">
              <div>
                <button className="btn btn-primary" onClick={restart} disabled={isDisabled}>
                  Start
                </button>
                {isStarted && (
                  <button className="btn btn-secondary" onClick={stopHandler}>
                    Stop
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>

        <Score />
      </div>
      {isCamOn && (
        <Webcam
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
      )}
      {!visitedHome && <Onboarding></Onboarding>}
    </>
  );
}

export default Dashboard;
