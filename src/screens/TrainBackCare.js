import Nav from "../components/core/Nav";
import Modal from "../components/core/Modal";
import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import { model } from "@tensorflow/tfjs";

const TrainBackCare = () => {
  
  const [isError, setIsError] = useState(false);
  
  const webcamRef = useRef(null);
  const classifier = knnClassifier.create();

  const trainModel = async (classId) => {
    // let img = takePicture();
    let img = webcamRef.current.video;
    console.log(img);
    let mobilenet = await mobilenetModule.load();
    let activation = mobilenet.infer(img, true);
    classifier.addExample(activation, classId);
    console.log(classifier.getNumClasses());
  };

  const saveModel = () => {
    let dataset = classifier.getClassifierDataset();
    console.log(dataset);

    var datasetObj = {};
    Object.keys(dataset).forEach((key) => {
      let data = dataset[key].dataSync();
      datasetObj[key] = Array.from(data);
    });
    console.log(datasetObj);
    let jsonStr = JSON.stringify(datasetObj);
    localStorage.setItem("myData", jsonStr);
    console.log("done", localStorage.getItem("myData"));
  };

  const showError = () => {
    setIsError(true);
  };

  return (
    <>
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
            <button className="bg-green" onClick={() => trainModel("good")}>
              Take Good Pic
            </button>
            <button className="bg-red" onClick={() => trainModel("bad")}>
              Take Bad Pic
            </button>
            <button
              className="bg-primary"
              onClick={() => saveModel()}
              // disabled={isDisabled}
              // onClick={saveModel}
            >
              Done
            </button>
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
    </>
  );
};

export default TrainBackCare;
