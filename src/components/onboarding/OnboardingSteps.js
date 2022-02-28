import React from "react";

const OnboardingSteps = ({ setCard }) => {
  return (
    <div className="onboarding-name">
      <div className="flex flex-justify-between flex-items-center">
        <h2 className="fs-xl" style={{ flexGrow: "1" }}>
          Features
        </h2>
        <img
          src="./assets/cartoon/smileydev.svg"
          style={{ width: "50%" }}
        ></img>
      </div>

      <div>
        <p className="mt-sm fs-md mb-sm fs-xl">
          We help you to take care of your:{" "}
        </p>
        <div className="flex flex-wrap features">
          <p>
            <i className="fa-solid fa-child"></i>Back
          </p>
          <p>
            <i className="fa-solid fa-eye"></i>Eye
          </p>
          <p>
            <i className="fa-solid fa-ear-listen"></i>Ear
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <button
          style={{ background: "var(--clr-primary-500) " }}
          onClick={() => setCard("how")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingSteps;
