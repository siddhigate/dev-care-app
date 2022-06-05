import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import { BarChart } from "../components/charts/BarChart";
import { useState } from "react";
import Modal from "../components/core/Modal";

function EarCare() {
  const [showHowModal, setshowHowModal] = useState(false);
  const [showexerciseModal, setExerciseModal] = useState(false);

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">Ear Care</h1>
            <div className="line-graph">
              <BarChart />
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
              <p className="fw-bold fs-lg">Ear Exercises</p>
              <p className="fs-sm mb-md">
                Get to know how to take care of your ears.
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
                Ear Care
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
                  <i class="fa-solid fa-ear-listen"></i>It is recommended to use
                  earphones max for 60 minutes per day.{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>We will remind you when u
                  reach the time limit.
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-chart-line"></i>We will visualize your
                  earphone usage time through chart
                </p>
                {/* <p className='mb-sm'>This will help your eyes to relax.</p> */}
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
                Ear Care
              </h2>
              <img
                src="./assets/cartoon/smileydev.svg"
                style={{ width: "50%" }}
                alt="cartoon character"
              ></img>
            </div>

            <div>
              <div className="flex flex-col flex-wrap fs-sm steps">
                <p className="mb-sm"> Follow 60-60 rule. </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-clock"></i>Use earphones maximum for 60
                  minutes per day.
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-volume-high"></i>Keep the volume 60%
                  maximum.
                </p>
                {/* <p className='mb-sm'>This will help your eyes to relax.</p> */}
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

export default EarCare;
