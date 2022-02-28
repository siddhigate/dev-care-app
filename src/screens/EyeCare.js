import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import { LineChart } from "../components/charts/LineChart";
import { useState } from "react";
import Modal from "../components/core/Modal";

function EyeCare() {
  const [showHowModal, setshowHowModal] = useState(false);
  const [showexerciseModal, setExerciseModal] = useState(false);

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">Eye Care</h1>
            <div className="line-graph">
              <LineChart> </LineChart>
            </div>
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">How it works?</p>
              <p className="fs-sm mb-md">Find out how this feature works</p>
              <button
                className="btn btn-primary"
                onClick={() => setshowHowModal(true)}
              >
                Find out
              </button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">Eye Exercises</p>
              <p className="fs-sm mb-md">
                Get to know some eye exercises to relax your eyes.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setExerciseModal(true)}
              >
                Find out
              </button>
            </div>
          </div>
        </div>
      </div>

      {showHowModal && (
        <Modal>
          <div className="onboarding-name">
            <div
              className="flex flex-justify-between flex-items-center"
              style={{ position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setshowHowModal(false)}
              ></i>
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Eye Care
              </h2>
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
                alt="cartoon character"
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  {" "}
                  <i class="fa-solid fa-eye"></i>We will help you to relax your
                  eyes.{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-regular fa-clock"></i>We will remind you every 20
                  minutes
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Click on the notification and
                  do the given exercise
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setshowHowModal(false)}
              >
                done
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showexerciseModal && (
        <Modal>
          <div className="onboarding-name">
            <div
              className="flex flex-justify-between flex-items-center"
              style={{ position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setExerciseModal(false)}
              ></i>
              <h2 className="fs-xl" style={{ flexGrow: "1" }}>
                Eye Care
              </h2>
            </div>
            <img
              src="./assets/exercise.png"
              alt="eye exercise"
              style={{ width: "80%", display: "block", margin: "2rem auto" }}
            ></img>
            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm">
                  {" "}
                  Every 20 minutes you spend looking at the screen look 20 feet
                  away for 20 seconds.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setExerciseModal(false)}
              >
                done
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EyeCare;
