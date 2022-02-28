import Nav from "../components/core/Nav";
import Modal from "../components/core/Modal";
import Webcam from "react-webcam";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import { model } from "@tensorflow/tfjs";

const toDatasetObject = async (dataset) => {
  const result = await Promise.all(
    Object.entries(dataset).map(async ([classId, value]) => {
      const data = await value.data();

      return {
        label: classId,
        data: Array.from(data),
        shape: value.shape,
      };
    })
  );

  return result;
};

const classifier = knnClassifier.create();

const TrainBackCare = () => {
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [showDoneModal, setShowDoneModal] = useState(false);
  const [goodPicsCount, setGoodPicsCount] = useState(0);
  const [badPicsCount, setBadPicsCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isTrained, setIsTrained] = useState(false);
  const [result, setResult] = useState(null);

  const webcamRef = useRef(null);

  const trainModel = async (classId) => {
    setSaving(true);

    let img = webcamRef.current.video;

    let mobilenet = await mobilenetModule.load();
    let activation = mobilenet.infer(img, true);
    classifier.addExample(activation, classId);

    setSaving(false);

    if (classId === "good") {
      setGoodPicsCount(goodPicsCount + 1);
    }

    if (classId === "bad") {
      setBadPicsCount(badPicsCount + 1);
    }
  };

  const saveModel = async () => {
    let dataset = classifier.getClassifierDataset();

    let datasetObj = await toDatasetObject(dataset);

    let jsonStr = JSON.stringify(datasetObj);
    localStorage.setItem("myData", jsonStr);

    setIsTrained(true);
    setShowDoneModal(true);
  };

  const classifyPic = async () => {
    setResult("finding if your posture is correct");
    let net = await mobilenetModule.load();
    const img = webcamRef.current.video;
    // Get the activation from mobilenet from the webcam.
    const activation = net.infer(img, true);
    const result = await classifier.predictClass(activation);

    setResult(result.label);
  };

  const showError = () => {
    setIsError(true);
  };

  useEffect(() => {
    if (goodPicsCount >= 2 && badPicsCount >= 2) {
      setIsDisabled(false);
    }
  }, [goodPicsCount, badPicsCount]);

  useEffect(() => {
    localStorage.setItem("visited", true);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Nav></Nav>

      <main className="container-center-lg mt-xl">
        <h1 className="fw-bold fs-xl mb-sm">Teach this app 👩‍🏫</h1>
        <p className="mt-md fs-md mb-md">
          Teach this app the difference between good posture and bad posture
        </p>

        <div className="train-wrapper flex">
          <div
            style={{
              height: "fit-content",
              border: "1px solid var(--clr-secondary-light)",
            }}
          >
            {" "}
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              onUserMediaError={showError}
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
          </div>

          <div className="train-back-btns flex flex-col flex-justify-center">
            {saving && (
              <div
                className="txt-center"
                style={{ padding: "1rem", maxWidth: "40ch" }}
              >
                Please wait. The app is learning about your posture.
              </div>
            )}
            <button className="bg-green" onClick={() => trainModel("good")}>
              Take Good Posture Pic <span>{goodPicsCount}</span>
            </button>
            <button className="bg-red" onClick={() => trainModel("bad")}>
              Take Bad Posture Pic <span>{badPicsCount}</span>
            </button>
            <button
              className="bg-primary"
              onClick={() => saveModel()}
              disabled={isDisabled}
            >
              Done
            </button>
            {isTrained && (
              <button className="bg-primary" onClick={() => classifyPic()}>
                Test Check Posture
              </button>
            )}
            {isTrained && result && <div className="txt-center">{result}</div>}
            {isTrained && (
              <Link to="/">
                {" "}
                <p className="txt-center fs-md mt-md txt-primary">
                  {" "}
                  <span style={{ borderBottom: "1px solid var(--clr-primary" }}>
                    Back to home
                  </span>
                </p>
              </Link>
            )}
          </div>
        </div>
      </main>

      {isError && (
        <Modal>
          <div className="modal-content" style={{ textAlign: "center" }}>
            <h1 className="h1">Error</h1>
            <div className="img-modal">
              <img
                src="./assets/cartoon/saddev.png"
                width="150"
                height="150"
                className="img-modal"
                alt="exercise"
              />
            </div>
            <div className="txt-center desc">
              Problem with camera. Can't use this feature :(
            </div>
            <div className="btn-center">
              <Link to="/">
                <button className="done-btn btn btn-primary">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}

      {showModal && (
        <Modal>
          <div className="onboarding-name">
            <div className="flex flex-justify-between flex-items-center">
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Back Care
              </h2>
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  <i className="fa-solid fa-camera"></i>Take pictures of good
                  and bad posture{" "}
                </p>
                <p className="mb-sm">
                  <i className="fa-solid fa-check"></i>Click on Done to finish
                </p>
                <p className="mb-sm">
                  <i className="fa-solid fa-circle-info"></i>More the pics
                  better it will be to detect{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setShowModal(false)}
              >
                Let's go
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showAlert && (
        <div className="alert-yellow flex flex-items-center">
          We don't save your data. Everything resides only on your browser.{" "}
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowAlert(false)}
          ></i>
        </div>
      )}

      {showDoneModal && (
        <Modal>
          <div className="onboarding-name" style={{ position: "relative" }}>
            <i
              className="fa-solid fa-xmark"
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={() => setShowDoneModal(false)}
            ></i>
            <div className="flex flex-justify-between flex-items-center">
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Yayy!
              </h2>
              <img
                src="./assets/cartoon/happydev.svg"
                style={{ width: "50%" }}
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm fs-md">
                  Now the app knows what a correct posture is. We are ready to
                  use the app now!
                </p>
              </div>
            </div>
            <div className="flex flex-justify-center">
              <Link to="/">
                <button
                  style={{
                    background: "var(--clr-primary-500)",
                    margin: "1.25rem 1rem 0 1rem",
                  }}
                  onClick={() => setShowDoneModal(false)}
                >
                  Home
                </button>
              </Link>

              <button
                style={{
                  background: "var(--clr-primary-500)",
                  margin: "1.25rem 1rem 0 1rem",
                }}
                onClick={() => setShowDoneModal(false)}
              >
                Test
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TrainBackCare;
