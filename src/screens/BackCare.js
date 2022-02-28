import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import PieChart from "../components/charts/PieChart";
import "../css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/core/Modal";

function BackCare() {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1>Back Care</h1>
            <div className="graph">
              <PieChart></PieChart>
            </div>
          </main>
          <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">How it works?</p>
              <p className="fs-sm mb-md">Find out how this feature works</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Find out
              </button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">Take new pics</p>
              <p className="fs-sm mb-md">
                Will help the app to determine whether you are sitting in
                correct posture or not
              </p>
              <Link to="/teachbackcare">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Take pics
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
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
                onClick={() => setShowModal(false)}
              ></i>
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
                  <i class="fa-solid fa-camera"></i>Take pictures of good and
                  bad posture{" "}
                </p>
                <p className="mb-sm">
                  <i class="fa-brands fa-leanpub"></i>App will learn the
                  difference between them
                </p>
                <p className="mb-sm">
                  <i class="fa-solid fa-bell"></i>Notify you if you are in bad
                  posture
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-items-end">
              <button
                style={{ background: "var(--clr-primary-500) " }}
                onClick={() => setShowModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default BackCare;
