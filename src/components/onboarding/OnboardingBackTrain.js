import React from "react";
import { Link } from "react-router-dom";

const OnboardingBackTrain = () => {
  return (
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
        <div className="flex flex-col flex-wrap fs-md steps">
          <p className="mb-sm">
            <i class="fa-solid fa-chalkboard-user"></i>Lets teach our app what a
            good posture and a bad posture is{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <Link to="/teachbackcare">
          <button style={{ background: "var(--clr-primary-500) " }}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnboardingBackTrain;
