import React from "react";

const OnboardingBackCare = ({ setCard }) => {
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
        <div className="flex flex-col flex-wrap fs-sm steps">
          <p className="mb-sm">
            <i class="fa-solid fa-camera"></i>Take pictures of good and bad
            posture{" "}
          </p>
          <p className="mb-sm">
            <i class="fa-brands fa-leanpub"></i>App will learn the difference
            between them
          </p>
          <p className="mb-sm">
            <i class="fa-solid fa-bell"></i>Notify you if you are in bad posture
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-items-end">
        <button
          style={{ background: "var(--clr-primary-500) " }}
          onClick={() => setCard("backtrain")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingBackCare;
